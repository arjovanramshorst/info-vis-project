import * as React from 'react'
import styled from 'styled-components'
import * as d3 from 'd3'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import { getPropertiesAsArray } from '../../data/dataset'

interface IGrowthChart {
    // data: IGenderEqualityData
    // selected: ICountry | null
    // setSelected: (country: ICountry | null) => void
    // selectedFeature: GenderEqualityFeature
    // selectedYear: GenderEqualityYear
}

const StyledGrowthChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 450px;
    
    svg rect {
        fill: #f0f2f5; /* chart background colour */
    }
`

const GrowthChart: React.FunctionComponent<IGrowthChart> = ({}) => {

    const [d3Container, width, height] = useResizableHook()

    const data = getPropertiesAsArray('EU-28', '2015')

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    return (
        <StyledGrowthChart ref={d3Container}>
            <D3Blackbox
                width={width}
                height={height}
                data={data}
                x={0}
                y={0}
                init={(svg, setElement) => {
                    const background = svg.append('g')
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)
                    const group = svg.append('g')
                        .attr('transform', `translate(${margin.left}, ${margin.top})`)

                    setElement('group', group)
                    setElement('background', background)

                }}
                render={(svg, data, { group, background }) => {
                    if (!group || !background) {
                        return
                    }
                    background.attr('width', width).attr('height', height)

                    const xScale = d3.scaleLinear()
                        .domain([2005, 2100])
                        .range([0, innerWidth])
                    const yScale = d3.scaleLinear()
                        .domain([30, 110])
                        .range([innerHeight, 0])

                    const line = d3.line()
                    // @ts-ignore
                        .x(d => xScale(Number(d.key)))
                        // @ts-ignore
                        .y(d => yScale(d.value))
                        .curve(d3.curveMonotoneX)

                    // TODO: Fix deletion of curves when something changes?
                    data.forEach(feature => {
                        group
                            .append('path')
                            .datum(feature.values.growth)
                            .attr('class', feature.title)
                            .attr('fill', 'none')
                            .attr('stroke', feature.color)
                            .attr('stroke-width', 1.5)
                            .attr('d', line)
                    })

                    group.append('g')
                        .attr('transform', `translate(0,${innerHeight})`)
                        .call(d3.axisBottom(xScale).ticks(20, 'd'))

                    group.append('g')
                        .call(d3.axisLeft(yScale))
                }}
            />
        </StyledGrowthChart>
    )
}

export default GrowthChart
