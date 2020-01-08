import * as React from 'react'
import styled from 'styled-components'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import {
    countryCode,
    GenderEqualityFeature,
    GenderEqualityYear,
    getPropertiesAsArray,
    MAPTEXT,
} from '../../data/dataset'
import * as d3 from 'd3'
import { ICountry } from '../layout/PageWrapper'

interface ILoadingBarChart {
    year: GenderEqualityYear
    setFeature: (feature: GenderEqualityFeature) => void
    feature: GenderEqualityFeature
    country: ICountry | null
}

const StyledLoadingBarChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 400px;

    .background {
        fill: #f0f2f5; /* chart background colour */
    }
    
    .bar {
        cursor: pointer;
        &:hover {
            // fill: #ffffff; /* hover colour */
            // filter: brightness(110%);
            // fill:brightness(110%);
            background-color: #000000;
            opacity: 0.75;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .rect {
            stroke-width: 3;
            transition: stroke 400ms ease-in-out
        }
    }
`

const LoadingBarChart: React.FunctionComponent<ILoadingBarChart> = ({ year, country, setFeature, feature }) => {
    const [d3Container, width, height] = useResizableHook()

    const margin = { top: 25, right: 20, bottom: 50, left: 75 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    if (year === 'reachEquality') {
        return null
    }

    const data = getPropertiesAsArray(countryCode(country), year).map(feature => ({
        key: feature.title,
        value:
            year === 'growth'
                ? feature.values.index['2015'] - feature.values.index['2005']
                : feature.values.index[year],
        color: feature.color,
        feature: feature.feature as GenderEqualityFeature,
    }))

    return (
        <StyledLoadingBarChart ref={d3Container}>
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

                    const xScale = d3.scaleLinear().domain([0, 100])

                    const yScale = d3
                        .scaleBand()
                        .domain(data.map(d => d.key))
                        .align(0.5)
                        .paddingInner(0.05)
                        .paddingOuter(0.1)

                    const axisBottom = group.append('g')

                    const axisLeft = group.append('g').call(d3.axisLeft(yScale))

                    const tooltip = d3
                        .select('.tooltip')

                    setElement('tooltip', tooltip)

                    setElement('group', group)
                    setElement('background', background)
                    setElement('xScale', xScale)
                    setElement('yScale', yScale)
                    setElement('axisLeft', axisLeft)
                    setElement('axisBottom', axisBottom)
                }}
                render={(svg, data, { group, background, xScale, yScale, tooltip }) => {
                    if (!group || !background || !xScale || !yScale) {
                        return
                    }

                    background.attr('width', width).attr('height', height)

                    xScale.range([0, innerWidth])
                    yScale.range([innerHeight, 0])

                    group.selectAll('*').remove()
                    const barGroup = group.selectAll('.bar').data(data)

                    const bar = barGroup
                        .enter()
                        .append('g')

                    barGroup
                        .exit()
                        .remove()

                    bar.attr('class', 'bar')
                        .attr('transform', (d: any) => `translate(0, ${yScale(d.key)})`)
                        .on('click', (d: typeof data[0]) => setFeature(d.feature))
                        .on('mouseover', (d: typeof data[0]) => {
                            tooltip
                                .transition()
                                .duration(200)
                                .style('opacity', 0.9)
                            tooltip
                                .html(
                                    `${country ? country.properties.name : 'EU'} (${year})<br /> ${MAPTEXT[d.feature]}: <strong>${d.value}</strong>`,
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

                    bar.append('rect').attr('class', 'rect')

                    svg.selectAll('.rect')
                        .attr('width', (d: any) => {
                            return xScale(d.value)
                        })
                        .attr('height', yScale.bandwidth())
                        .attr('fill', (d: any) => d.color)
                        .attr('stroke', (d: any) => d.feature === feature ? 'rgba(0,0,0,0.75)' : d.color)

                    group
                        .append('g')
                        .attr('transform', `translate(0,${innerHeight})`)
                        .call(d3.axisBottom(xScale).ticks(20, 'd'))

                    group.append('g').call(d3.axisLeft(yScale))
                }}
            />
        </StyledLoadingBarChart>
    )
}

export default LoadingBarChart
