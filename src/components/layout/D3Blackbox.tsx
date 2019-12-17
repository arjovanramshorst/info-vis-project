import * as React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react'
import * as d3 from 'd3'

interface ID3Blackbox {
    x: number,
    y: number,
    data: any,
    width: number,
    height: number,
    init: (svg: any, setElement: (key: string, value: any) => void) => void,
    render: (svg: any, data: any, elements: Record<string, any>) => void
}

const D3Blackbox = ({ x, y, data, width, height, init, render }: ID3Blackbox) => {
    const refAnchor = React.useRef(null)

    const [elements, setElements] = useState({})

    useLayoutEffect(() => {
        const elements = {} as Record<string, any>
        init(d3.select(refAnchor.current), (key: string, value: any) => {
            elements[key] = value
        })

        setElements(elements)
    }, [])

    useEffect(() => {
        if (elements && data) {
            render(d3.select(refAnchor.current), data, elements)
        }
    }, [elements, data, width, height])

    return <svg ref={refAnchor} style={{ width, height }} transform={`translate(${x}, ${y})`} />
}

export default D3Blackbox
