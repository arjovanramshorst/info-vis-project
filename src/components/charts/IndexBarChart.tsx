import * as React from 'react'
import * as d3 from 'd3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import {
    COLORS,
    genderEqualityData,
    GenderEqualityFeature,
    GenderEqualityYear,
    getKey,
    MAPTEXT,
} from '../../data/dataset'
import styled from 'styled-components'
import { ICountry } from '../layout/PageWrapper'

interface IIndexBarChart {
    sort: (a: { key: string; value: number }, b: { key: string; value: number }) => number
    countryCodeToCountry: Record<string, ICountry>
    feature: GenderEqualityFeature
    year: GenderEqualityYear
    from?: number
    to?: number
}

const StyledIndexBarChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 50vh;
    position: relative;

    .background {
        fill: #f0f2f5; /* chart background colour */
    }
    .bar {
        &:hover {
            // fill: #ffffff; /* hover colour */
            // filter: brightness(110%);
            // fill:brightness(110%);
            background-color: #000000;
            opacity: 0.75;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }
`

const IndexBarChart: React.FunctionComponent<IIndexBarChart> = ({ countryCodeToCountry, sort, feature, year, from = 0, to = 100 }) => {
    const [d3Container, width, height] = useResizableHook()

    const { ['EU-28']: eu, ...withoutEu } = genderEqualityData

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom


    const countryKeys = Object.keys(withoutEu) as Array<keyof typeof withoutEu>

    const data = countryKeys
        .map(countryKey => ({
            key: countryCodeToCountry[countryKey] ? countryCodeToCountry[countryKey].properties.name : countryKey,
            value:
                year === 'growth'
                    ? Math.round(withoutEu[countryKey][getKey(feature, '2015')] - withoutEu[countryKey][getKey(feature, '2005')])
                    : withoutEu[countryKey][getKey(feature, year)],
        }))
        .sort(sort)

    return (
        <StyledIndexBarChart ref={d3Container}>
            <D3Blackbox
                x={0}
                y={0}
                width={width}
                height={height}
                data={data.slice(0, 10)}
                init={(svg, setElement) => {
                    const background = svg
                        .append('g')
                        .append('rect')
                        .attr('class', 'background')
                        .attr('x', 0)
                        .attr('y', 0)
                    const group = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

                    const xScale = d3
                        .scaleBand()
                        .range([0, innerWidth])
                        .domain(data.map(d => d.key))
                        .align(0.5)
                        .paddingInner(0.05)
                        .paddingOuter(0.1)

                    const yScale = d3
                        .scaleLinear()
                        .range([innerHeight, 0])
                        .domain([from, to])

                    const axisBottom = group
                        .append('g')
                        .attr('transform', `translate(0,${innerHeight})`)
                        .call(d3.axisBottom(xScale))

                    const axisLeft = group.append('g').call(d3.axisLeft(yScale))

                    const tooltip = d3
                        .select('.tooltip')
                        // .append('div')
                        // .attr('class', 'tooltip')
                        // .style('opacity', 0)

                    setElement('tooltip', tooltip)
                    setElement('group', group)
                    setElement('background', background)
                    setElement('xScale', xScale)
                    setElement('yScale', yScale)
                    setElement('axisBottom', axisBottom)
                    setElement('axisLeft', axisLeft)
                }}
                render={(svg, data, { group, background, xScale, yScale, tooltip }) => {
                    if (!group || !background) {
                        return
                    }

                    background.attr('width', width).attr('height', height)

                    xScale.range([0, innerWidth]).domain(data.map(d => d.key))
                    yScale.range([innerHeight, 0])

                    group.selectAll('*').remove()

                    const bar = group
                        .selectAll('.bar')
                        .data(data)
                        .enter()
                        .append('g')
                        .attr('class', 'bar')
                        .attr('transform', (d: any) => `translate(${xScale(d.key)},0)`)
                        .on('mouseover', (d: any) => {
                            tooltip
                                .transition()
                                .duration(200)
                                .style('opacity', 0.9)
                            tooltip
                                .html(
                                    `${d.key} (${year})<br /> ${MAPTEXT[feature]}: <strong>${d.value}</strong>`,
                                )
                                .style('left', d3.event.pageX + 'px')
                                .style('top', d3.event.pageY - 28 + 'px')
                        })
                        .on('mouseout', (d: ICountry) => {
                            tooltip
                                .transition()
                                .duration(500)
                                .style('opacity', 0)
                        })

                    bar.append('rect')
                        .attr('y', (d: any) => Math.min(yScale(0), yScale(d.value)))
                        .attr('height', (d: any) => Math.abs(yScale(0) - yScale(d.value)))
                        .attr('width', xScale.bandwidth())
                        .attr('fill', COLORS[feature])

                    group
                        .append('g')
                        .attr('transform', `translate(0,${innerHeight})`)
                        .call(d3.axisBottom(xScale).ticks(20, 'd'))

                    group.append('g').call(d3.axisLeft(yScale))
                }}
            />
        </StyledIndexBarChart>
    )
}

export default IndexBarChart
