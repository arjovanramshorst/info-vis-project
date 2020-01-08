import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import classNames from 'classnames'
import { d3Path } from '../../utils/d3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import { COLORSCALE, GenderEqualityFeature, GenderEqualityYear, getKey } from '../../data/dataset'
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
        transition: fill 200ms ease-in-out;
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
            fill: rgb(101, 110, 99); /* country colour */
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            border: 3px solid black;
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

const mapText = {
    gender_equality_index: 'GEI',
    work: 'WORK',
    money: 'MONEY',
    knowledge: 'KNOWLEDGE',
    time: 'TIME',
    power: 'POWER',
    health: 'HEALTH',
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
                        .attr('height', 5)
                        .style('fill', 'url(#linear-gradient)')
                        .attr('x', 20)
                        .attr('y', 50)

                    const zeroText = svg
                        .append('text')
                        .text('0')
                        .attr('x', 20)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    const hundText = svg
                        .append('text')
                        .text('100')
                        .attr('x', 150)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    const tooltip = d3
                        .select('body')
                        .append('div')
                        .attr('class', 'tooltip')
                        .style('opacity', 0)

                    setElement('rectangle', rectangle)
                    setElement('countriesGroup', countriesGroup)
                    setElement('infotext', infotext)
                    setElement('linearGradient', linearGradient)
                    setElement('zeroText', zeroText)
                    setElement('hundText', hundText)
                    setElement('tooltip', tooltip)
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

                    const color = d3
                        .scaleQuantize()
                        .domain([
                            // @ts-ignore
                            d3.min(data.features, getFeature),
                            // @ts-ignore
                            d3.max(data.features, getFeature),
                        ])
                        // @ts-ignore
                        .range(colorRange(selectedFeature))

                    countries
                        .attr('d', path)
                        .attr('class', (d: ICountry) =>
                            classNames('country', d.selected && 'country-selected', d.equalityData && 'selectable'),
                        )
                        .attr('fill', (d: ICountry) => (d.equalityData ? color(getFeature(d)) : '#4b5358'))
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
                                        `${d.properties.name}<br /> ${selectedFeature}: <strong>${getFeature(
                                            d,
                                        )}</strong>`,
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

                    infotext.text(mapText[selectedFeature] + ' (' + selectedYear + ')')
                    zeroText.text(d3.min(data.features, getFeature))
                    hundText.text(d3.max(data.features, getFeature))

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
