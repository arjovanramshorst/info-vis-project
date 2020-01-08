import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import IndexBarChart from '../../charts/IndexBarChart'
import { ISlideProps } from './slides.interface'
import { useEffect } from 'react'

import FeatureSelect from '../../layout/components/FeatureSelect'
import YearSelect from '../../layout/components/YearSelect'

interface ISlide3 extends ISlideProps {}

const Slide3: React.FunctionComponent<ISlide3> = ({ setFeature, setYear, feature, year, countryCodeToCountry }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>Some countries are already doing great</SlideTitle>
            <SlideText>
                These countries scored the highest
                <span style={{ margin: '5px' }}>
                    <FeatureSelect feature={feature} setFeature={setFeature} />
                </span>
                rank in the year
                <span style={{ margin: '5px' }}>
                    <YearSelect year={year} setYear={setYear} />
                </span>
            </SlideText>
            <IndexBarChart sort={(a, b) => b.value - a.value} feature={feature} year={year} countryCodeToCountry={countryCodeToCountry} />
        </div>
    )
}

export default Slide3
