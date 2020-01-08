import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import classNames from 'classnames'
import { d3Path } from '../../utils/d3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import {
    COLORSCALE,
    genderEqualityData,
    GenderEqualityFeature,
    GenderEqualityYear,
    getKey,
    getRange,
    MAPTEXT,
    reachEquality,
} from '../../data/dataset'
import { ICountry, IGeoData } from '../layout/PageWrapper'

interface IWorldMap {
    selected: ICountry | null
    setSelected: (country: ICountry | null) => void
    selectedFeature: GenderEqualityFeature
    selectedYear: GenderEqualityYear
    geoData: IGeoData | null
    setGeoData: (geoData: IGeoData) => void
}

const StyledMap = styled.div`
    height: calc(100vh - 152px);
    margin-bottom: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    svg rect {
        fill: #f0f2f5; /* map background colour */
        //stroke: #2A2C39; /* map border colour */
        //stroke-width: 1; /* map border width */
    }

    .country {
        transition: fill 200ms ease-in-out, stroke-width 200ms ease-in-out;
        //fill: #4b5358; /* country colour */
        stroke: #2a2c39; /* country border colour */
        stroke-width: 1; /* country border width */
        &.selectable {
            //fill: rgba(0,0,0,0.30);
            cursor: pointer;
            &:hover {
                // fill: #ffffff; /* hover colour */
                // filter: brightness(110%);
                // fill:brightness(110%);
                background-color: #000000;
                opacity: 0.75;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
        }

        &.country-selected {
            //fill: rgb(101, 110, 99); /* country colour */
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            stroke-width: 4;
        }
    }

    .countryLabel {
        display: none; /* hide all country labels by default */
    }

    .countryName {
        fill: #fffaff; /* country label text colour */
    }

    .countryLabelBg {
        fill: #30bced; /* country label background colour */
    }
`

const colorRange = (feature: GenderEqualityFeature) => {
    return COLORSCALE[feature]
}

export const WorldMap = ({
                             selected,
                             setSelected,
                             selectedFeature,
                             selectedYear,
                             geoData,
                             setGeoData,
                             ...props
                         }: IWorldMap) => {
    const [d3Container, width, height] = useResizableHook()

    const getFeature =
        selectedYear === 'growth'
            ? (d: ICountry) =>
            d.equalityData &&
            Math.round(
                d.equalityData[getKey(selectedFeature, '2015')] - d.equalityData[getKey(selectedFeature, '2005')],
            )
            : selectedYear === 'reachEquality'
            ? (d: ICountry) => d.equalityData && reachEquality(selectedFeature, d.properties.iso_a2 as keyof typeof genderEqualityData)
            : (d: ICountry) => d.equalityData && d.equalityData[getKey(selectedFeature, selectedYear)]

    useEffect(() => {
        // Update selected
        if (geoData) {
            setGeoData({
                ...geoData,
                features: geoData.features.map((d: ICountry) =>
                    selected && d.properties.iso_a3 === selected.properties.iso_a3
                        ? {
                            ...d,
                            selected: true,
                        }
                        : {
                            ...d,
                            selected: false,
                        },
                ),
            })
        }
    }, [selected])

    return (
        <StyledMap ref={d3Container} id="worldmap">
            <D3Blackbox
                x={0}
                y={0}
                width={width}
                height={height}
                data={geoData}
                dependsOn={[selectedYear, selectedFeature]}
                init={(svg, setElement) => {
                    setElement('path', d3Path(width, height))

                    const countriesGroup = svg.append('g').attr('id', 'map')

                    // add a background rectangle
                    const rectangle = countriesGroup
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)

                    const infotext = svg
                        .append('text')
                        .attr('x', 20)
                        .attr('y', 30)
                        .attr('fill', 'black')
                        .attr('font-weight', 'bold')

                    const linearGradient = svg
                        .append('defs')
                        .append('linearGradient')
                        .attr('id', 'linear-gradient')

                    linearGradient
                        .attr('x1', '0%')
                        .attr('y1', '0%')
                        .attr('x2', '100%')
                        .attr('y2', '0%')

                    svg.append('rect')
                        .attr('width', 150)
                        .attr('height', 8)
                        .style('fill', 'url(#linear-gradient)')
                        .attr('x', 20)
                        .attr('y', 50)

                    const zeroText = svg
                        .append('text')
                        .attr('x', 20)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    const hundText = svg
                        .append('text')
                        .attr('x', 150)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    const tooltip = d3
                        .select('.tooltip')
                    // .append('div')
                    // .attr('class', 'tooltip')
                    // .style('opacity', 0)
                    setElement('tooltip', tooltip)

                    setElement('rectangle', rectangle)
                    setElement('countriesGroup', countriesGroup)
                    setElement('infotext', infotext)
                    setElement('linearGradient', linearGradient)
                    setElement('zeroText', zeroText)
                    setElement('hundText', hundText)
                }}
                render={(
                    svg,
                    data: IGeoData,
                    { countriesGroup, rectangle, infotext, linearGradient, tooltip, zeroText, hundText },
                ) => {
                    if (!countriesGroup) {
                        return
                    }

                    rectangle
                        .attr('width', width)
                        .attr('height', height)
                        .on('click', () => setSelected(null))

                    countriesGroup.attr('width', width).attr('height', height)

                    // draw a path for each feature/country
                    const countries = countriesGroup.selectAll('path').data(data.features)

                    countries.enter().append('path')

                    countries.exit().remove()

                    const path = d3Path(width, height)

                    const domain = ['2005', '2010', '2015'].includes(selectedYear)
                        ? getRange(selectedFeature)
                        : [
                            // @ts-ignore
                            d3.min(data.features, getFeature) || 0,
                            // @ts-ignore
                            d3.max(data.features, getFeature) || 100,
                        ] as [number, number]

                    const color = d3
                        .scaleQuantize()
                        .domain(domain)
                        // @ts-ignore
                        .range(colorRange(selectedFeature))

                    countries
                        .attr('d', path)
                        .attr('class', (d: ICountry) =>
                            classNames('country', d.selected && 'country-selected', d.equalityData && 'selectable'),
                        )
                        .attr('fill', (d: ICountry) => (d.equalityData ? (getFeature(d) ? color(getFeature(d)) : 'rgba(0,0,0,0.3') : '#4b5358'))
                        .on('click', (d: ICountry) => {
                            if (d.equalityData) {
                                setSelected(d)
                            } else {
                                setSelected(null)
                            }
                        })
                        .on('mouseover', (d: ICountry) => {
                            if (d.equalityData) {
                                tooltip
                                    .transition()
                                    .duration(200)
                                    .style('opacity', 0.9)
                                tooltip
                                    .html(
                                        `${d.properties.name} (${selectedYear})<br /> ${MAPTEXT[selectedFeature]}: <strong>${getFeature(
                                            d,
                                        ) || 'Negative growth'}</strong>`,
                                    )
                                    .style('left', d3.event.pageX + 'px')
                                    .style('top', d3.event.pageY - 28 + 'px')
                            }
                        })
                        .on('mouseout', (d: ICountry) => {
                            tooltip
                                .transition()
                                .duration(500)
                                .style('opacity', 0)
                        })

                    infotext.text(MAPTEXT[selectedFeature] + ' (' + selectedYear + ')')
                    zeroText.text(domain[0])
                    hundText.text(domain[1])

                    linearGradient.selectAll('*').remove()

                    linearGradient
                        .append('stop')
                        .attr('offset', '0%')
                        .attr('stop-color', colorRange(selectedFeature)[0])

                    linearGradient
                        .append('stop')
                        .attr('offset', '100%')
                        .attr('stop-color', colorRange(selectedFeature)[4])
                }}
            />
        </StyledMap>
    )
}

export default WorldMap
