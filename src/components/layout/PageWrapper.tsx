import * as React from 'react'
import { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap, { ICountry } from '../charts/world/WorldMap'
import { randomData } from './d3/randomData'
import { GenderEqualityFeature, GenderEqualityYear } from '../../data/dataset'
import Slide1 from '../pages/slides/Slide1'
import Slide2 from '../pages/slides/Slide2'
import Slide7 from '../pages/slides/Slide7'
import Slide6 from '../pages/slides/Slide6'
import Slide5 from '../pages/slides/Slide5'
import Slide4 from '../pages/slides/Slide4'
import Slide3 from '../pages/slides/Slide3'

const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
    background: #fff;
    padding: 24px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);
`

const StyledArrow = styled.a`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const max = 300

const PageWrapper = () => {
    const [country, setCountry] = useState(null as ICountry | null)
    const [slide, setSlide] = useState(0)
    const [slideTransition, setSlideTransition] = useState(false)
    const [slideData, setSlideData] = useState(randomData[0])

    const [feature, setFeature] = useState('gender_equality_index' as GenderEqualityFeature)
    const [year, setYear] = useState('2005' as GenderEqualityYear)

    const graphColorSelect = ['blue', '#F44336']
    const boxShadow = [
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        '0 4px 8px 0 grey, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    ]

    const [list, setList] = useState([50, 60, 12, 34, 56])

    const slideProps = { year, setYear, feature, setFeature }

    return (
        <div>
            <Layout style={{ backgroundColor: 'white' }}>
                <SlideshowSteps step={slide} setStep={setSlide} />
                <Row type="flex" align="middle">
                    <Col md={1}>
                        {slide > 0 && (
                            <StyledArrow
                                onClick={() => {
                                    setSlideTransition(true)

                                    setTimeout(() => {
                                        setSlideTransition(false)
                                        setSlideData(randomData[slide - 1])
                                        setSlide(slide - 1)
                                    }, 500)
                                }}
                                style={{}}
                            >
                                ❮
                            </StyledArrow>
                        )}
                    </Col>
                    <Col md={10}>
                        <WorldMap
                            selected={country}
                            setSelected={setCountry}
                            selectedFeature={feature}
                            selectedYear={year}
                        />
                    </Col>
                    <Col md={12}>
                        <StyledLayoutContent>
                            <StyledContentContainer>
                                {slide === 0 && <Slide1 {...slideProps} />}
                                {slide === 1 && <Slide2 {...slideProps} />}
                                {slide === 2 && <Slide3 {...slideProps} />}
                                {slide === 3 && <Slide4 {...slideProps} />}
                                {slide === 4 && <Slide5 {...slideProps} />}
                                {slide === 5 && <Slide6 {...slideProps} />}
                                {slide === 6 && <Slide7 {...slideProps} />}
                            </StyledContentContainer>
                        </StyledLayoutContent>
                    </Col>
                    <Col md={1}>
                        {slide < 6 && (
                            <StyledArrow
                                onClick={() => {
                                    setSlideTransition(true)
                                    setTimeout(() => {
                                        setSlideTransition(false)
                                        setSlideData(randomData[slide + 1])
                                        setSlide(slide + 1)
                                    }, 500)
                                }}
                                style={{}}
                            >
                                ❯
                            </StyledArrow>
                        )}
                    </Col>
                </Row>
            </Layout>
            <Layout.Footer style={{ textAlign: 'center', backgroundColor: 'black', border: '1px solid grey' }}>
                <p style={{ color: 'white' }}>InfoVis 2019 Q2 (Group 25)</p>
            </Layout.Footer>
        </div>
    )
}

export default withRouter(PageWrapper)
