import React from 'react'
import * as d3 from 'd3'

const Legend = () => {
    var svg = d3.select("#rects")

    var defs = svg.append("defs");
    var linearGradient = defs.append("linearGradient")
                                .attr("id", "linear-gradient");
    linearGradient
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");

    linearGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "hsl(279, 0%, 100%)");
    //Set the color for the end (100%)
    linearGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "hsl(279, 100%, 40%)");
    
    svg.append("rects")
        .attr("width", 300)
        .attr("height", 20)
        .style("fill", "url(#linear-gradient)");

    return (
        <svg id="rects" width='300' height='20'/>
    )
}

export default Legend