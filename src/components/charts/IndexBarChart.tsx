import * as React from 'react'
import * as d3 from 'd3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import { COLORS, genderEqualityData, getKey } from '../../data/dataset'
import styled from 'styled-components'

interface IIndexBarChart {
    sort: (a: { key: string; value: number }, b: { key: string; value: number }) => number
}

const StyledIndexBarChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 450px;

    .background {
        fill: #f0f2f5; /* chart background colour */
    }
`

const IndexBarChart: React.FunctionComponent<IIndexBarChart> = ({ sort }) => {
    const [d3Container, width, height] = useResizableHook()

    const { ['EU-28']: eu, ...withoutEu } = genderEqualityData

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    // TODO: Move to props
    const feature = 'gender_equality_index'
    const year = '2015'

    const data = Object.keys(withoutEu)
        .map(countryKey => ({
            key: countryKey,
            // @ts-ignore
            value: withoutEu[countryKey][getKey(feature, year)],
        }))
        .sort(sort)

    return (
        <StyledIndexBarChart ref={d3Container}>
            <D3Blackbox
                x={0}
                y={0}
                width={width}
                height={height}
                data={data}
                init={(svg, setElement) => {
                    const background = svg
                        .append('g')
                        .append('rect')
                        .attr('class', 'background')
                        .attr('x', 0)
                        .attr('y', 0)
                    const group = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

                    setElement('group', group)
                    setElement('background', background)
                }}
                render={(svg, data, { group, background }) => {
                    if (!group || !background) {
                        return
                    }

                    background.attr('width', width).attr('height', height)

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
                        .domain([0, 100])

                    group
                        .append('g')
                        .attr('transform', `translate(0,${innerHeight})`)
                        .call(d3.axisBottom(xScale))

                    group.append('g').call(d3.axisLeft(yScale))

                    const bar = group
                        .selectAll('.bar')
                        .data(data)
                        .enter()
                        .append('g')
                        .attr('class', 'bar')
                        .attr('transform', (d: any) => `translate(${xScale(d.key)},0)`)

                    bar.append('rect')
                        .attr('y', (d: any) => yScale(d.value))
                        .attr('height', (d: any) => innerHeight - yScale(d.value))
                        .attr('width', xScale.bandwidth())
                        .attr('fill', COLORS[feature])
                }}
            />
        </StyledIndexBarChart>
    )
}

export default IndexBarChart
