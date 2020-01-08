import * as React from 'react'
import { SlideText, SlideTitle } from './slides.components'
import styled from 'styled-components'
import { url } from '../../../utils/router'
import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { ISlideProps } from './slides.interface'

interface ISlide6 extends ISlideProps {
}

const SlideImage = styled.div`
    background-image: url(${url('/assets/core_domains.png')});
    background-size: contain;
    background-repeat: no-repeat;
    height: 600px;
`

const Slide6: React.FunctionComponent<ISlide6> = ({ setYear, setFeature }) => {
    useEffect(() => {
        setYear('2015')
        setFeature('gender_equality_index')
    }, [])

    return (
        <Row>
            <Col md={8}>
                <SlideTitle>Core domains.</SlideTitle>
                <SlideText>
                    In Europe the GEI is measured by 6 core domains, which are relevant to the structure of the european
                    policy.
                    Work, money, knowledge, time, power, and health. The domain with the smallest gap is Health. While the
                    biggest gap is seen in Power.
                </SlideText>
            </Col>
            <Col md={16}>
                <SlideImage />
            </Col>
        </Row>
    )
}

export default Slide6
