import * as React from 'react'
import { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap, { ICountry } from '../charts/world/WorldMap'
import LineChart from './d3/LineChart'
import { randomData } from './d3/randomData'
import SingleBar from './d3/SingleBar'
import { GenderEqualityFeature, GenderEqualityYear } from '../../data/dataset'
import YearSlider from './components/YearSlider'
import FeatureSelect from './components/FeatureSelect'

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

    return (
        <div>
            <Layout style={{backgroundColor: 'white'}}>
                <SlideshowSteps step={slide} setStep={setSlide} />
                <Row type="flex" align="middle">
                    <Col md={1}>
                        <StyledArrow
                            onClick={() => {
                                setSlideTransition(true)
                                setTimeout(() => {
                                    setSlideTransition(false)
                                }, 500)
                                setTimeout(() => {
                                    if (slide == 0) setSlide(6)
                                    else {
                                        setSlideData(randomData[slide - 1])
                                        setSlide(slide - 1)
                                    }
                                }, 500)
                            }}
                            style={{}}
                        >
                            ❮
                        </StyledArrow>
                    </Col>
                    <Col md={22}>
                        <div>
                            <div style={{ opacity: 1, transition: 'opacity 0.5s linear' }}>
                                <div
                                    style={{
                                        opacity: 1,
                                        transition: 'opacity 0.5s linear',
                                        display: 'flex',
                                    }}
                                >
                                    {(() => {
                                        if (slide != 6 && slide != 5) {
                                            return (
                                                <div
                                                    style={
                                                        slideTransition
                                                            ? {
                                                                  opacity: 0,
                                                                  transition: 'opacity 0.5s linear',
                                                                  width: '80%',
                                                              }
                                                            : {
                                                                  opacity: 1,
                                                                  transition: 'opacity 0.5s linear',
                                                                  width: '80%',
                                                              }
                                                    }
                                                >
                                                    <LineChart
                                                        data={slideData}
                                                        color={graphColorSelect[slide / 3]}
                                                        boxshadow={boxShadow[0]}
                                                    />
                                                    <div
                                                        style={
                                                            slide < 3
                                                                ? {
                                                                      color: 'black',
                                                                      marginTop: '10vh',
                                                                  }
                                                                : { color: 'white', marginTop: '10vh' }
                                                        }
                                                    >
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </div>
                                                </div>
                                            )
                                        } else if (slide == 5) {
                                            return (
                                                <div
                                                    style={
                                                        slideTransition
                                                            ? {
                                                                  opacity: 0,
                                                                  transition: 'opacity 0.5s linear',
                                                                  width: '80%',
                                                              }
                                                            : {
                                                                  opacity: 1,
                                                                  transition: 'opacity 0.5s linear',
                                                                  width: '80%',
                                                              }
                                                    }
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                        {list.map(e => {
                                                            const y = max - (max * e) / 100
                                                            return (
                                                                <SingleBar
                                                                    key={e}
                                                                    width="60px"
                                                                    height="300px"
                                                                    color="#ea1"
                                                                    percentage={`${Number(e).toFixed(2)} %`}
                                                                    data={`M 0 ${max} L 0  ${y} L 60 ${y} l 60 ${max} Z`}
                                                                />
                                                            )
                                                        })}
                                                    </div>
                                                    <div style={{ color: 'white', marginTop: '10vh' }}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Row
                                                    style={
                                                        slideTransition
                                                            ? {
                                                                  opacity: 0,
                                                                  transition: 'opacity 0.5s linear',
                                                                  display: 'flex',
                                                                  width: '80%',
                                                              }
                                                            : {
                                                                  opacity: 1,
                                                                  transition: 'opacity 0.5s linear',
                                                                  display: 'flex',
                                                                  width: '80%',
                                                              }
                                                    }
                                                >
                                                    <Col md={12}>
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
                                                                <YearSlider year={year} setYear={setYear} />
                                                                <FeatureSelect feature={feature} setFeature={setFeature} />
                                                            </StyledContentContainer>
                                                        </StyledLayoutContent>
                                                    </Col>
                                                </Row>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={1}>
                        <StyledArrow
                            onClick={() => {
                                setSlideTransition(true)
                                setTimeout(() => {
                                    setSlideTransition(false)
                                }, 500)
                                setTimeout(() => {
                                    if (slide == 6) setSlide(0)
                                    else {
                                        setSlideData(randomData[slide + 1])
                                        setSlide(slide + 1)
                                    }
                                }, 500)
                            }}
                            style={{}}
                        >
                            ❯
                        </StyledArrow>
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
