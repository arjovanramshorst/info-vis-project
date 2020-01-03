import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'

interface ISlide3 {}

const Slide3: React.FunctionComponent<ISlide3> = ({}) => (
    <div>
        <SlideTitle>Some countries are already doing great</SlideTitle>
        <SlideText>These countries scored the highest GEI in the year 2015.</SlideText>
        {/*TODO: Add step 3 components here*/}
    </div>
)

export default Slide3
