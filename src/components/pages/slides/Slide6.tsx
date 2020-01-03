import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import { Comp6 } from './Comp6.js'

interface ISlide6 {}

const Slide6: React.FunctionComponent<ISlide6> = ({}) => (
    <div>
        <SlideTitle>Core domains.</SlideTitle>
        <SlideText>
            In Europe the GEI is measured by 6 core domains, which are relevant to the structure of the european policy.
            Work, money, knowledge, time, power, and health. The domain with the smallest gap is Health. While the
            biggest gap is seen in Power.
        </SlideText>

        <Comp6 />
    </div>
)

export default Slide6
