import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'
import IndexBarChart from '../../charts/IndexBarChart'
import FeatureSelect from '../../layout/components/FeatureSelect'

interface ISlide5 extends ISlideProps {}

const Slide5: React.FunctionComponent<ISlide5> = ({ setYear, setFeature, feature, year, countryCodeToCountry }) => {
    useEffect(() => {
        setYear('growth')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>A+ for effort.</SlideTitle>
            <SlideText>
                Not everything can be said from high or low scores, these countries have had the highest growth on
                <FeatureSelect feature={feature} setFeature={setFeature} />
                between 2005 and 2015.
            </SlideText>
            {/*TODO: Add step 5 components here*/}
            <IndexBarChart sort={(a, b) => b.value - a.value} feature={feature} year={year} from={0} to={30} countryCodeToCountry={countryCodeToCountry} />
        </div>
    )
}

export default Slide5
