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

const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
    background: #fff;
    padding: 24px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);
`

const max = 300

const PageWrapper = () => {
    const [country, setCountry] = useState(null as ICountry | null)
    const second = true
    const [slide, setSlide] = useState(0)
    const [slideTransition, setSlideTransition] = useState(false)
    const [slideData, setSlideData] = useState(randomData[0])

    const graphColorSelect = ['blue', '#F44336']
    const boxShadow = [
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        '0 4px 8px 0 grey, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    ]

    const [list, setList] = useState([50, 60, 12, 34, 56])

    return (
        <div>
            <Layout
                style={
                    slide <= 2 || slide === 6
                        ? { height: '100vh', backgroundColor: '#f0f2f5' }
                        : {
                              height: '100vh',
                              backgroundColor: 'black',
                          }
                }
            >
                <SlideshowSteps step={slide} setStep={setSlide} />
                <div>
                    <div
                        style={
                            second
                                ? { opacity: 1, transition: 'opacity 0.5s linear' }
                                : {
                                      opacity: 0,
                                      transition: 'opacity 0.5s linear',
                                  }
                        }
                    >

                        <div
                            style={
                                second
                                    ? {
                                          opacity: 1,
                                          transition: 'opacity 0.5s linear',
                                          display: 'flex',
                                      }
                                    : { opacity: 0, transition: 'visibility 0s, opacity 0.5s linear' }
                            }
                        >
                            <a
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
                                style={{
                                    fontSize: '30px',
                                    display: 'flex',
                                    width: '10%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                ❮
                            </a>

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
                                                    : { opacity: 1, transition: 'opacity 0.5s linear', width: '80%' }
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.
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
                                                    : { opacity: 1, transition: 'opacity 0.5s linear', width: '80%' }
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                mollit anim id est laborum.
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
                                                <WorldMap data={[]} selected={country} setSelected={setCountry} />
                                            </Col>
                                            <Col md={12}>
                                                <StyledLayoutContent>
                                                    <StyledContentContainer>
                                                        <h1>Test</h1>
                                                        <p>Test</p>
                                                    </StyledContentContainer>
                                                </StyledLayoutContent>
                                            </Col>
                                        </Row>
                                    )
                                }
                            })()}

                            <a
                                onClick={() => {
                                    setSlideTransition(true)
                                    setTimeout(() => {
                                        setSlideTransition(false)
                                    }, 500)
                                    setTimeout(() => {
                                        setSlide((slide + 1) % 7)
                                        setSlideData(randomData[(slide + 1) % 6])
                                    }, 500)
                                }}
                                style={{
                                    fontSize: '30px',
                                    display: 'flex',
                                    width: '10%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
            <Layout.Footer style={{ textAlign: 'center', backgroundColor: 'black', border: '1px solid grey' }}>
                <p style={{ color: 'white' }}>InfoVis 2019 Q2 (Group 25)</p>
            </Layout.Footer>
        </div>
    )
}

export default withRouter(PageWrapper)
