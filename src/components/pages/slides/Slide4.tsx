import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import IndexBarChart from '../../charts/IndexBarChart'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'

import FeatureSelect from '../../layout/components/FeatureSelect'
import YearSelect from '../../layout/components/YearSelect'

interface ISlide4 extends ISlideProps {}

const Slide4: React.FunctionComponent<ISlide4> = ({ setYear, setFeature, feature, year }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>But others are staying behind.</SlideTitle>
            <SlideText>These countries scored the lowest
            <span style={{margin:'5px'}}><FeatureSelect feature={feature} setFeature={setFeature}/></span>
                rank in the year
                <span style={{margin:'5px'}}><YearSelect year={year} setYear={setYear}/></span>
            </SlideText>
            <IndexBarChart sort={(a, b) => a.value - b.value} feature={feature} year={year} />
        </div>
    )
}

export default Slide4
