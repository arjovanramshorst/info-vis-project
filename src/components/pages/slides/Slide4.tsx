import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'

interface ISlide4 {}

const Slide4: React.FunctionComponent<ISlide4> = ({}) => (
    <div>
        <SlideTitle>But others are staying behind.</SlideTitle>
        <SlideText>These countries scored the lowest GEI in the year 2015.</SlideText>
        {/*TODO: Add step 4 components here*/}
    </div>
)

export default Slide4
