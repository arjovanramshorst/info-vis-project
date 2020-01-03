import * as React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react'
import * as d3 from 'd3'
import { useRef } from 'react'

interface ID3Blackbox<T extends any> {
    x: number
    y: number
    data: T | null
    width: number
    height: number
    init: (svg: any, setElement: (key: string, value: any) => void) => void
    render: (svg: any, data: T, elements: Record<string, any>) => void
    dependsOn?: any[]
}

type ResizableHook = () => [React.MutableRefObject<HTMLDivElement | null>, number, number]

export const useResizableHook: ResizableHook = () => {
    const d3Container = useRef(null as HTMLDivElement | null)
    const [width, setWidth] = useState(500)
    const [height, setHeight] = useState(500)

    useEffect(() => {
        const resize = () => {
            if (d3Container && d3Container.current) {
                setHeight(d3Container.current.getBoundingClientRect().height)
                setWidth(d3Container.current.getBoundingClientRect().width)
            }
        }
        resize()

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return [d3Container, width, height]
}

const D3Blackbox = <T extends any>({ x, y, data, width, height, init, render, dependsOn = [] }: ID3Blackbox<T>) => {
    const refAnchor = React.useRef(null)

    const [elements, setElements] = useState({})

    useLayoutEffect(() => {
        // Initialize elements
        const elements = {} as Record<string, any>
        init(d3.select(refAnchor.current), (key: string, value: any) => {
            elements[key] = value
        })

        setElements(elements)
    }, [])

    useEffect(() => {
        // Update elements
        if (elements && data) {
            console.log('Render is called')
            console.log('Elements', elements)
            render(d3.select(refAnchor.current), data, elements)
        }
    }, [elements, data, width, height, ...dependsOn])

    return <svg ref={refAnchor} style={{ width, height }} transform={`translate(${x}, ${y})`} />
}

export default D3Blackbox
