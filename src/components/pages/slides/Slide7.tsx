import * as React from 'react'
import YearSlider from '../../layout/components/YearSlider'
import { ISlideProps } from './slides.interface'
import { SlideText, SlideTitle } from './slides.components'
import LoadingBarChart from '../../charts/LoadingBarChart'

interface ISlide7 extends ISlideProps {}

const Slide7: React.FunctionComponent<ISlide7> = ({ country, year, setYear, feature, setFeature }) => (
    <React.Fragment>
        <SlideTitle>How big is the gender gap in the European Union?</SlideTitle>
        <SlideText>Play around with the data to see for yourself. Try clicking on a country.</SlideText>
        <YearSlider year={year} setYear={setYear} />
        <SlideTitle> {country != null ? country.properties.name : 'EU'} ({year})</SlideTitle>
        <LoadingBarChart year={year} setFeature={setFeature} country={country} />
    </React.Fragment>
)

export default Slide7
