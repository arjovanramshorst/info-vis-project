import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import GrowthChart from '../../charts/GrowthChart'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'

interface ISlide2 extends ISlideProps {}

const Slide2: React.FunctionComponent<ISlide2> = ({ setYear, setFeature, countryCodeToCountry }) => {
    useEffect(() => {
        setYear('reachEquality')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>We are on our way, but slowly</SlideTitle>
            <SlideText>
                The Gender Equality Index (GEI) has improved since 2005. However, if the GEI keeps growing at the same
                rate as it did between 2010 and 2015, the gender gap will not be closed until 2090 (60 years too late).
            </SlideText>

            <GrowthChart countryCodeToCountry={countryCodeToCountry} />
        </div>
    )
}

export default Slide2
