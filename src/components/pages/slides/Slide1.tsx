import * as React from 'react'
import { ISlideProps } from './slides.interface'
import { useEffect } from 'react'
import { SlideText, SlideTitle } from './slides.components'
import  Legend  from '../../layout/components/Legend.js';

interface ISlide1 extends ISlideProps {}

const Slide1: React.FunctionComponent<ISlide1> = ({ setYear, setFeature }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <div>
            <SlideTitle>How big is the gender gap in the European Union?</SlideTitle>
            <SlideText>
                Gender equality is one of the most prominent problems we have yet to solve. In the Sustainable
                Development Goals initiative, the UN has declared its intention to close the gender gap worldwide by
                2030. How far is the European Union from achieving this goal?
            </SlideText>
            <Legend />
        </div>
    )
}

export default Slide1
