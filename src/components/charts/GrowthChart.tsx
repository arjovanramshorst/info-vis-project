import * as React from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import { genderEqualityData, getPropertiesAsArray, MAPTEXT, reachEquality } from '../../data/dataset'
import { ICountry } from '../layout/PageWrapper'

interface IGrowthChart {
    // data: IGenderEqualityData
    // selected: ICountry | null
    // setSelected: (country: ICountry | null) => void
    // selectedFeature: GenderEqualityFeature
    // selectedYear: GenderEqualityYear
    countryCodeToCountry: Record<string, ICountry>
}

const StyledGrowthChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 250px;

    svg rect {
        fill: #f0f2f5; /* chart background colour */
    }
    .country {
        cursor: pointer;

        &:hover {
            text {
                fill: rgba(0, 0, 0, 0.6);
            }
        }
    }
`

const GrowthChart: React.FunctionComponent<IGrowthChart> = ({ countryCodeToCountry }) => {
    const [d3Container, width, height] = useResizableHook()

    const reachData = (Object.keys(genderEqualityData) as Array<keyof typeof genderEqualityData>)
        .map(country => ({
            key: countryCodeToCountry[country] ? countryCodeToCountry[country].properties.name : country,
            value: reachEquality('gender_equality_index', country),
        }))
        .filter(d => d.value)
        .sort((a, b) => (a.value && b.value ? a.value - b.value : 0))

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    return (
        <StyledGrowthChart ref={d3Container}>
            <D3Blackbox
                width={width}
                height={height}
                data={reachData}
                x={0}
                y={0}
                init={(svg, setElement) => {
                    const background = svg
                        .append('g')
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)
                    const group = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

                    const xAxis = group.append('g')
                    setElement('xAxis', xAxis)

                    const tooltip = d3.select('.tooltip')
                    setElement('tooltip', tooltip)

                    setElement('group', group)

                    setElement('background', background)
                }}
                render={(svg, data, { group, background, xAxis, tooltip }) => {
                    if (!group || !background) {
                        return
                    }
                    background.attr('width', width).attr('height', height)

                    const xScale = d3
                        .scaleLinear()
                        .domain([2005, 2100])
                        .range([0, innerWidth])

                    const countries = group
                        .selectAll('.country')
                        .data(data)
                        .enter()
                        .append('g')
                        .attr('class', 'country')
                        .attr(
                            'transform',
                            (d: any, index: number) => `translate(${xScale(d.value)},${(index % 6) * 20})`,
                        )
                        .on('mouseover', (d: any) => {
                            tooltip
                                .transition()
                                .duration(200)
                                .style('opacity', 0.9)
                            tooltip
                                .html(`${d.key}<br /> <strong>${d.value}</strong>`)
                                .style('left', d3.event.pageX + 12 + 'px')
                                .style('top', d3.event.pageY - 28 + 'px')
                        })
                        .on('mouseout', (d: ICountry) => {
                            tooltip
                                .transition()
                                .duration(500)
                                .style('opacity', 0)
                        })

                    countries
                        .append('text')
                        .html((d: any) =>
                            countryCodeToCountry[d.key] ? countryCodeToCountry[d.key].properties.name : d.key,
                        )

                    countries
                        .append('circle')
                        .attr('r', 2)
                        .attr('cy', 5)
                        .attr('fill', 'black')

                    countries
                        .append('rect')
                        .attr('class', '.line')
                        .attr('opacity', 0.1)
                        .attr('width', '1px')
                        .attr('y', 5)
                        .attr('height', (d: any, index: number) => `${innerHeight - (index % 6) * 20 - 5}px`)
                        .attr('stroke', 'black')

                    xAxis.attr('transform', `translate(0,${innerHeight})`).call(d3.axisBottom(xScale).ticks(20, 'd'))
                }}
            />
        </StyledGrowthChart>
    )
}

export default GrowthChart
