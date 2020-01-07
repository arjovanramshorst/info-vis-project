import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import classNames from 'classnames'
import { url } from '../../utils/router'
import { d3Path } from '../../utils/d3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import {
    COLORSCALE,
    genderEqualityData,
    GenderEqualityFeature,
    GenderEqualityYear,
    getKey,
    IGenderEqualityData,
} from '../../data/dataset'

interface IWorldMap {
    selected: ICountry | null
    setSelected: (country: ICountry | null) => void
    selectedFeature: GenderEqualityFeature
    selectedYear: GenderEqualityYear
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
                opacity: 0.75
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

export interface ICountry {
    properties: Record<string, string>
    selected?: boolean
    equalityData?: IGenderEqualityData
}

export interface IGeoData {
    features: ICountry[]
}

const colorRange = (feature: GenderEqualityFeature) => {
    return COLORSCALE[feature]
}

export const WorldMap = ({ selected, setSelected, selectedFeature, selectedYear, ...props }: IWorldMap) => {
    const [geoData, setGeoData] = useState(null as IGeoData | null)
    const [d3Container, width, height] = useResizableHook()

    const getFeature =
        selectedYear === 'growth'
            ? (d: any) =>
                d.equalityData &&
                d.equalityData[getKey(selectedFeature, '2015')] - d.equalityData[getKey(selectedFeature, '2005')]
            : (d: any) => d.equalityData && d.equalityData[getKey(selectedFeature, selectedYear)]

    // const featureKey = `${selectedFeature}_${selectedYear}` as keyof IGenderEqualityData

    const findGradientColors = {
        'gender_equality_index' : ['hsl(279, 0%, 100%)', 'hsl(279, 100%, 40%)'],
        'work': ['hsl(317, 0%, 100%)', 'hsl(317, 100%, 35%)'],
        'money': ['hsl(89, 0%, 100%)', 'hsl(89, 100%, 36%)'],
        'knowledge': ['hsl(227, 0%, 100%)', 'hsl(227, 100%, 40%)'],
        'time': ['hsl(26, 0%, 100%)', 'hsl(26, 100%, 50%)'],
        'power': ['hsl(1, 0%, 100%)', 'hsl(1, 100%, 50%)'],
        'health': ['hsl(52, 0%, 100%)', 'hsl(52, 100%, 48%)'],
    }

    const mapText = {
        'gender_equality_index' : 'GEI',
        'work': 'WORK',
        'money': 'MONEY',
        'knowledge': 'KNOWLEDGE',
        'time': 'TIME',
        'power': 'POWER',
        'health': 'HEALTH',
    }

    useEffect(() => {
        // Load initial data
        d3.json(url('/assets/custom.geo.json')).then(json => {
            if (!geoData) {
                const mergedFeatures = json.features.map((feature: any) => {
                    const countryKey = feature.properties.iso_a2 as keyof typeof genderEqualityData
                    if (genderEqualityData[countryKey]) {
                        return {
                            ...feature,
                            equalityData: genderEqualityData[countryKey],
                        }
                    }
                    return feature
                })
                setGeoData({ features: mergedFeatures })
            }
        })
    })

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
        <StyledMap ref={d3Container}>
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

                    const infotext = svg.append('text')
                        .attr('x', 20)
                        .attr('y', 30)
                        .attr('fill', 'black')
                        .attr('font-weight', 'bold')

                    const linearGradient = svg.append("defs")
                        .append("linearGradient")
                        .attr("id", "linear-gradient")

                    linearGradient
                        .attr("x1", "0%")
                        .attr("y1", "0%")
                        .attr("x2", "100%")
                        .attr("y2", "0%");

                    svg.append("rect")
                        .attr("width", 150)
                        .attr("height", 5)
                        .style("fill", "url(#linear-gradient)")
                        .attr('x', 20)
                        .attr('y', 50);

                    const zeroText = svg.append('text').text('0')
                        .attr('x', 20)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    const hundText = svg.append('text').text('100')
                        .attr('x', 150)
                        .attr('y', 70)
                        .attr('fill', 'black')

                    setElement('rectangle', rectangle)
                    setElement('countriesGroup', countriesGroup)
                    setElement('infotext', infotext)
                    setElement('linearGradient', linearGradient)
                    setElement('zeroText', zeroText)
                    setElement('hundText', hundText)

                }}
                render={(svg, data: IGeoData, { countriesGroup, rectangle, infotext, linearGradient }) => {
                    if (!countriesGroup) {
                        return
                    }

                    rectangle.attr('width', width).attr('height', height)

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
                            }
                        })
                    
                    infotext.text(mapText[selectedFeature] + ' (' + selectedYear + ')');
                    
                    linearGradient.selectAll("*").remove();

                    linearGradient.append("stop")
                        .attr("offset", "0%")
                        .attr("stop-color", findGradientColors[selectedFeature][0]);

                    linearGradient.append("stop")
                        .attr("offset", "100%")
                        .attr("stop-color", findGradientColors[selectedFeature][1]);
                }}
            />
        </StyledMap>
    )
}

export default WorldMap
