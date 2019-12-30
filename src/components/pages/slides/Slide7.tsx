import * as React from 'react'
import FeatureSelect from '../../layout/components/FeatureSelect'
import YearSlider from '../../layout/components/YearSlider'
import { ISlideProps } from './slides.interface'

interface ISlide7 extends ISlideProps {

}

const Slide7: React.FunctionComponent<ISlide7> = ({ year, setYear, feature, setFeature }) => <React.Fragment>
    <YearSlider year={year} setYear={setYear} />
    <FeatureSelect
        feature={feature}
        setFeature={setFeature}
    />
</React.Fragment>

export default Slide7
