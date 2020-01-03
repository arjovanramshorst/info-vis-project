import * as React from 'react'
import FeatureSelect from '../../layout/components/FeatureSelect'
import YearSlider from '../../layout/components/YearSlider'
import { ISlideProps } from './slides.interface'
import { SlideText, SlideTitle } from './slides.components'
import LoadingBarChart from '../../charts/LoadingBarChart'

interface ISlide7 extends ISlideProps {}

const Slide7: React.FunctionComponent<ISlide7> = ({ year, setYear, feature, setFeature }) => (
    <React.Fragment>
        <SlideTitle>How big is the gender gap in the European Union?</SlideTitle>
        <SlideText>Play around with the data to see for yourself. Try clicking on a country or on a domain.</SlideText>
        <YearSlider year={year} setYear={setYear} />
        <FeatureSelect feature={feature} setFeature={setFeature} />
        <LoadingBarChart />
    </React.Fragment>
)

export default Slide7
