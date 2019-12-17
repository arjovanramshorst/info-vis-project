import * as d3 from 'd3'

const centreOfEurope: [number, number] = [12, 58]

const scaleToCenter = 0.8

export const d3Projection = (width: number, height: number) =>
    d3
        .geoMercator()
        .center(centreOfEurope) // set centre to centre of europe
        .scale(scaleToCenter * height)
        .translate([width / 2, height / 2]) // ensure centered in group

// Define map path
export const d3Path = (width: number, height: number) => d3.geoPath().projection(d3Projection(width, height))
