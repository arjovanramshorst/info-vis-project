import * as React from 'react'
import styled from 'styled-components'
import D3Blackbox, { useResizableHook } from '../layout/D3Blackbox'
import { countryCode, GenderEqualityFeature, GenderEqualityYear, getPropertiesAsArray } from '../../data/dataset'
import * as d3 from 'd3'
import { ICountry } from './WorldMap'

interface ILoadingBarChart {
    year: GenderEqualityYear
    setFeature: (feature: GenderEqualityFeature) => void
    country: ICountry | null
}

const StyledLoadingBarChart = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 400px;

    .background {
        fill: #f0f2f5; /* chart background colour */
    }
`

const LoadingBarChart: React.FunctionComponent<ILoadingBarChart> = ({ year, country, setFeature }) => {
    const [d3Container, width, height] = useResizableHook()

    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const data = getPropertiesAsArray(countryCode(country), year).map(feature => ({
        key: feature.title,
        value:
            year === 'growth'
                ? feature.values.index['2015'] - feature.values.index['2005']
                : feature.values.index[year],
        color: feature.color,
        feature: feature.feature,
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

                    setElement('group', group)
                    setElement('background', background)
                    setElement('xScale', xScale)
                    setElement('yScale', yScale)
                    setElement('axisLeft', axisLeft)
                    setElement('axisBottom', axisBottom)
                }}
                render={(svg, data, { group, background, xScale, yScale, axisBottom, axisLeft }) => {
                    if (!group || !background || !xScale || !yScale) {
                        return
                    }

                    background.attr('width', width).attr('height', height)

                    xScale.range([0, innerWidth])
                    yScale.range([innerHeight, 0])

                    axisBottom.attr('transform', `translate(0,${innerHeight})`).call(d3.axisBottom(xScale))

                    axisLeft.call(d3.axisLeft(yScale))

                    console.log(data)
                    const barGroup = group.selectAll('.bar').data(data)

                    const bar = barGroup
                        .enter()
                        .call(() => console.log('enter'))
                        .append('g')

                    barGroup
                        .exit()
                        .call(() => console.log('exit'))
                        .remove()

                    bar.attr('class', 'bar')
                        .attr('transform', (d: any) => `translate(0, ${yScale(d.key)})`)
                        .on('click', (d: any) => setFeature(d.feature))

                    bar.append('rect').attr('class', 'rect')

                    // TODO: Figure out why the data (d) HERE is not changed when data in this function has changed?!?!?!?!?!
                    // TODO: This is necessary for the onClick to work on the last slide, which is kinda important.... :\
                    svg.selectAll('.rect')
                        .attr('width', (d: any) => {
                            console.log(d)
                            return xScale(d.value)
                        })
                        .attr('height', yScale.bandwidth())
                        .attr('fill', (d: any) => d.color)
                }}
            />
        </StyledLoadingBarChart>
    )
}

export default LoadingBarChart
