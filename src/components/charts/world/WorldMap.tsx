import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { d3Path } from '../../../utils/d3'
import styled from 'styled-components'
import { Row, Col } from 'antd'

interface IWorldMap {
    // TODO: Correct typing
    data: any[]
}

const width = 700
const height = 700

const StyledMap = styled.div`
    svg rect {
        fill: #ffffff; /* map background colour */
        stroke: #2A2C39; /* map border colour */
        stroke-width: 1; /* map border width */
    }

    .country {
        fill: #4B5358; /* country colour */
        stroke: #2A2C39; /* country border colour */
        stroke-width: 1; /* country border width */
        cursor: pointer;
        
        &.country-selected {
            fill: #ff0000; /* country colour */
        }
    }
    .country:hover {
        fill: #ffffff; /* country colour */
       
    }

    .country-on {
        //fill: #4B5358; /* highlight colour for selected country */
    }

    .countryLabel {
        display: none; /* hide all country labels by default */
    }

    .countryName {
        fill: #FFFAFF; /* country label text colour */
    }

    .countryLabelBg {
        fill: #30BCED; /* country label background colour */
    }
`

interface ICountry {
    properties: Record<string, string>
}

export const WorldMap = (props: IWorldMap) => {
    const d3Container = useRef(null)

    const [selected, setSelected] = useState(null as ICountry | null)

    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current)
                const path = d3Path(width, height)

                const res = d3.json('/assets/custom.geo.json')
                    .then(json => {
                        //Bind data and create one path per GeoJSON feature
                        const countriesGroup = svg.append("g").attr("id", "map")
                        // add a background rectangle
                        countriesGroup
                            .append("rect")
                            .attr("x", 0)
                            .attr("y", 0)
                            .attr("width", width)
                            .attr("height", height)

                        // draw a path for each feature/country
                        const countries = countriesGroup
                            .selectAll("path")
                            .data(json.features)
                            .enter()
                            .append("path")
                            // @ts-ignore
                            .attr("d", path)
                            // .attr("id", (d, i) => "country" + d.properties.iso_a3)
                            .attr("class", (d: ICountry, i: any) => selected && (d.properties.iso_a3 === selected.properties.iso_a3)
                                ? 'country country-selected'
                                : 'country',
                            )
                            //      .attr("stroke-width", 10)
                            //      .attr("stroke", "#ff0000")
                            // add a mouseover action to show name label for feature/country
                            // .on("mouseover", function (d, i) {
                            //     d3.select("#countryLabel" + d.properties.iso_a3).style("display", "block")
                            // })
                            // .on("mouseout", function (d, i) {
                            //     d3.select("#countryLabel" + d.properties.iso_a3).style("display", "none")
                            // })
                            // // add an onclick action to zoom into clicked country
                            .on("click", (d: ICountry, i: any) => {
                                setSelected(d)
                            })
                    })

            }
        },
        [props.data, selected, d3Container.current],
    )
    return (
        <Row>
            <Col md={14}>
                <StyledMap>
                    <svg
                        className="d3-component"
                        width={width}
                        height={height}
                        ref={d3Container}
                    />
                </StyledMap>
            </Col>
            <Col md={10}>
                {selected && <div>
                    <h1>{selected.properties.name}</h1>
                    <pre>{JSON.stringify(selected, null, 2)}</pre>
                </div>}
            </Col>
        </Row>
    )
}

export default WorldMap
