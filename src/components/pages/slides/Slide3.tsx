import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import IndexBarChart from '../../charts/IndexBarChart'
import { ISlideProps } from './slides.interface'
import { useEffect } from 'react'

interface ISlide3 extends ISlideProps {}

const Slide3: React.FunctionComponent<ISlide3> = ({ setFeature, setYear, feature, year }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>Some countries are already doing great</SlideTitle>
            <SlideText>These countries scored the highest GEI in the year 2015.</SlideText>
            {/*TODO: Add step 3 components here*/}
            <IndexBarChart sort={(a, b) => b.value - a.value} feature={feature} year={year} />
        </div>
    )
}

export default Slide3
