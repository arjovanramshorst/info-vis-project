import * as React from 'react'
import { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap, { ICountry } from '../charts/world/WorldMap'
import { GenderEqualityFeature, GenderEqualityYear } from '../../data/dataset'
import Slide1 from '../pages/slides/Slide1'
import Slide2 from '../pages/slides/Slide2'
import Slide7 from '../pages/slides/Slide7'
import Slide6 from '../pages/slides/Slide6'
import Slide5 from '../pages/slides/Slide5'
import Slide4 from '../pages/slides/Slide4'
import Slide3 from '../pages/slides/Slide3'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Section } from '../../App'

const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
    // Required for transitions
    width: 100%;
    top: 0;
    left: 0;
    // End required for transitions
    
    background: #fff;
    padding: 24px;
    height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);
`

const StyledArrow = styled.a`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PageWrapper = () => {
    const [country, setCountry] = useState(null as ICountry | null)
    const [slide, setSlide] = useState(0)

    const [feature, setFeature] = useState('gender_equality_index' as GenderEqualityFeature)
    const [year, setYear] = useState('2005' as GenderEqualityYear)

    const graphColorSelect = ['blue', '#F44336']
    const boxShadow = [
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        '0 4px 8px 0 grey, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    ]

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
                                    setSlide(slide - 1)
                                }}
                            >
                                ❮
                            </StyledArrow>
                        )}
                    </Col>
                    <Col md={8}>
                        {/*Hide for first slide or not?*/}
                        <WorldMap
                            selected={country}
                            setSelected={setCountry}
                            selectedFeature={feature}
                            selectedYear={year}
                        />
                    </Col>
                    <Col md={14}>
                        <StyledLayoutContent>
                            <StyledContentContainer>
                                <TransitionGroup style={{ position: 'relative' }}>
                                    <CSSTransition key={slide} timeout={{ enter: 500, exit: 500 }} classNames={'fade'}>
                                        <Section>
                                        {slide === 0 && <Slide1 {...slideProps} />}
                                        {slide === 1 && <Slide2 {...slideProps} />}
                                        {slide === 2 && <Slide3 {...slideProps} />}
                                        {slide === 3 && <Slide4 {...slideProps} />}
                                        {slide === 4 && <Slide5 {...slideProps} />}
                                        {slide === 5 && <Slide6 {...slideProps} />}
                                        {slide === 6 && <Slide7 {...slideProps} />}
                                        </Section>
                                    </CSSTransition>
                                </TransitionGroup>
                            </StyledContentContainer>
                        </StyledLayoutContent>
                    </Col>
                    <Col md={1}>
                        {slide < 6 && (
                            <StyledArrow
                                onClick={() => {
                                    setSlide(slide + 1)
                                }}
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
