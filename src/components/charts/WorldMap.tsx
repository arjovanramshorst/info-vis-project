import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import classNames from 'classnames'
import { url } from '../../utils/router'
import { d3Path } from '../../utils/d3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import {
    COLORS,
    genderEqualityData,
    GenderEqualityFeature,
    GenderEqualityYear,
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
                fill: #ffffff; /* hover colour */
            }
        }

        &.country-selected {
            fill: #ff0000; /* country colour */
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
    return ['white', COLORS[feature]]
}

export const WorldMap = ({ selected, setSelected, selectedFeature, selectedYear, ...props }: IWorldMap) => {
    const [geoData, setGeoData] = useState(null as IGeoData | null)
    const featureKey = `${selectedFeature}_${selectedYear}` as keyof IGenderEqualityData

    const [d3Container, width, height] = useResizableHook()

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

                    setElement('rectangle', rectangle)
                    setElement('countriesGroup', countriesGroup)
                }}
                render={(svg, data: IGeoData, { countriesGroup, rectangle }) => {
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
                        .scaleLinear()
                        .domain([
                            // @ts-ignore
                            d3.min(data.features, d => d.equalityData && d.equalityData[featureKey]),
                            // @ts-ignore
                            d3.max(data.features, d => d.equalityData && d.equalityData[featureKey]),
                        ])
                        // @ts-ignore
                        .range(colorRange(selectedFeature))

                    countries
                        .attr('d', path)
                        .attr('class', (d: ICountry) =>
                            classNames('country', d.selected && 'country-selected', d.equalityData && 'selectable'),
                        )
                        .attr('fill', (d: ICountry) => (d.equalityData ? color(d.equalityData[featureKey]) : '#4b5358'))
                        .on('click', (d: ICountry) => {
                            if (d.equalityData) {
                                setSelected(d)
                            }
                        })
                }}
            />
        </StyledMap>
    )
}

export default WorldMap
