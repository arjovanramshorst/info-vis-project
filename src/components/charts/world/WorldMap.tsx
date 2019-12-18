import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import * as d3 from 'd3'
import { url } from '../../../utils/router'
import { d3Path } from '../../../utils/d3'
import D3Blackbox from '../../layout/D3Blackbox'

interface IWorldMap {
    // TODO: Correct typing
    data: any[]
    selected: ICountry | null
    setSelected: (country: ICountry | null) => void
}

const StyledMap = styled.div`
    height: calc(100vh - 140px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    svg rect {
        fill: #ffffff; /* map background colour */
        //stroke: #2A2C39; /* map border colour */
        //stroke-width: 1; /* map border width */
    }

    .country {
        fill: #4b5358; /* country colour */
        stroke: #2a2c39; /* country border colour */
        stroke-width: 1; /* country border width */
        cursor: pointer;

        &.country-selected {
            fill: #ff0000; /* country colour */
        }
    }
    .country:hover {
        fill: #ffffff; /* country colour */
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
}

export const WorldMap = ({ selected, setSelected, data, ...props }: IWorldMap) => {
    const d3Container = useRef(null as HTMLDivElement | null)
    const [width, setWidth] = useState(800)
    const [height, setHeight] = useState(800)
    const [geoData, setGeoData] = useState(null as any)

    useEffect(() => {
        const resize = () => {
            if (d3Container && d3Container.current) {
                setHeight(d3Container.current.getBoundingClientRect().height)
                setWidth(d3Container.current.getBoundingClientRect().width)
            }
        }
        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    })

    useEffect(() => {
        // Update width/height
        if (d3Container && d3Container.current) {
            setHeight(d3Container.current.getBoundingClientRect().height)
            setWidth(d3Container.current.getBoundingClientRect().width)
        }
    })

    useEffect(() => {
        // Load initial data
        if (!geoData) {
            d3.json(url('/assets/custom.geo.json')).then(json => {
                setGeoData(json)
            })
        }
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
        <Row>
            <Col>
                <StyledMap ref={d3Container}>
                    <D3Blackbox
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        data={geoData}
                        init={(svg, setElement) => {
                            setElement('path', d3Path(width, height))

                            const countriesGroup = svg.append('g').attr('id', 'map')

                            // add a background rectangle
                            countriesGroup
                                .append('rect')
                                .attr('x', 0)
                                .attr('y', 0)
                                .attr('width', width)
                                .attr('height', height)

                            setElement('countriesGroup', countriesGroup)
                        }}
                        render={(svg, data, { countriesGroup }) => {
                            if (!countriesGroup) {
                                return
                            }

                            countriesGroup.attr('width', width).attr('height', height)

                            // draw a path for each feature/country
                            const countries = countriesGroup.selectAll('path').data(data.features)

                            countries.enter().append('path')
                            // @ts-ignore

                            countries.exit().remove()

                            const path = d3Path(width, height)

                            countries
                                .attr('d', path)
                                .attr('class', (d: ICountry, i: any) =>
                                    d.selected ? 'country country-selected' : 'country',
                                )
                                .on('click', (d: ICountry, i: any) => {
                                    setSelected(d)
                                })
                        }}
                    />
                </StyledMap>
            </Col>
        </Row>
    )
}

export default WorldMap
