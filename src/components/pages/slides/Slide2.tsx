import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'

interface ISlide2 {

}

const Slide2: React.FunctionComponent<ISlide2> = ({}) => <div>
    <SlideTitle>
        We are on our way, but slowly
    </SlideTitle>
    <SlideText>
        The Gender Equality Index (GEI) has improved since 2005.
        However, if the GEI keeps growing at the same rate as it did in those 5 years, the gender gap will not be closed until 2090 (60 years too late).
    </SlideText>

    {/*TODO: Add step 2 components here*/}
</div>

export default Slide2
