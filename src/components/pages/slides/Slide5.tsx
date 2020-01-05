import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'
import IndexBarChart from '../../charts/IndexBarChart'

interface ISlide5 extends ISlideProps {}

const Slide5: React.FunctionComponent<ISlide5> = ({ setYear, setFeature, feature, year }) => {
    useEffect(() => {
        setYear('growth')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>A+ for effort.</SlideTitle>
            <SlideText>
                Not everything can be said from high or low scores, these countries have had the highest growth on the
                GEI in the last 15 years.
            </SlideText>
            {/*TODO: Add step 5 components here*/}
            <IndexBarChart sort={(a, b) => b.value - a.value} feature={feature} year={year} from={-5} to={20} />
        </div>
    )
}

export default Slide5
