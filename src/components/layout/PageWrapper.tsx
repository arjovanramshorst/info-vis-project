import * as React from 'react'
import { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap, { ICountry } from '../charts/WorldMap'
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
import YearSlider from './components/YearSlider'
import FeatureSelect from './components/FeatureSelect'


const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
    background: #f0f2f5;
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
    const [year, setYear] = useState('2010' as GenderEqualityYear)

    const slideProps = { country, setCountry, year, setYear, feature, setFeature }

    return (
        <div>
            <Layout style={{ backgroundColor: '#f0f2f5' }}>
                <SlideshowSteps step={slide} setStep={setSlide} />
                <Row type="flex" align="middle">
                    
                    {
                        slide === 6 ? <div style={{display : "flex", marginLeft:'2vh'}}>
                            <div style={{marginTop:'-4vh'}}>
                                <YearSlider year={year} setYear={setYear} />
                                    <WorldMap
                                        selected={country}
                                        setSelected={setCountry}
                                        selectedFeature={feature}
                                        selectedYear={year}
                                    />
                                <FeatureSelect feature={feature} setFeature={setFeature}/>
                            </div>
                            <div style={{margin:'4vh'}}>
                                <p>The selected country is The Netherlands.</p>
                                <p>Display facts about The Netherlands</p>
                            </div>
                        </div>
                    
                    :
                    
                    <Col md={21}>
                        <StyledLayoutContent>
                            <StyledContentContainer>
                                <TransitionGroup style={{ position: 'relative', marginTop:'-4vh' }}>
                                    <CSSTransition key={slide} timeout={{ enter: 500, exit: 500 }} classNames={'fade'}>
                                        <Section>
                                            {slide === 0 && <Slide1 {...slideProps} />}
                                            {slide === 1 && <Slide2 {...slideProps} />}
                                            {slide === 2 && <Slide3 {...slideProps} />}
                                            {slide === 3 && <Slide4 {...slideProps} />}
                                            {slide === 4 && <Slide5 {...slideProps} />}
                                            {slide === 5 && <Slide6 {...slideProps} />}
                                        </Section>
                                    </CSSTransition>
                                </TransitionGroup>
                            </StyledContentContainer>
                        </StyledLayoutContent>
                    </Col>
                    }
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
