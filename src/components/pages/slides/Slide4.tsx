import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import IndexBarChart from '../../charts/IndexBarChart'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'

interface ISlide4 extends ISlideProps {}

const Slide4: React.FunctionComponent<ISlide4> = ({ setYear, setFeature, feature, year }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>But others are staying behind.</SlideTitle>
            <SlideText>These countries scored the lowest GEI in the year 2015.</SlideText>
            {/*TODO: Add step 4 components here*/}
            <IndexBarChart sort={(a, b) => a.value - b.value} feature={feature} year={year} />
        </div>
    )
}

export default Slide4
