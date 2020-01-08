import * as React from 'react'
import { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap from '../charts/WorldMap'
import { genderEqualityData, GenderEqualityFeature, GenderEqualityYear, IGenderEqualityData } from '../../data/dataset'
import Slide1 from '../pages/slides/Slide1'
import Slide2 from '../pages/slides/Slide2'
import Slide7 from '../pages/slides/Slide7'
import Slide6 from '../pages/slides/Slide6'
import Slide5 from '../pages/slides/Slide5'
import Slide4 from '../pages/slides/Slide4'
import Slide3 from '../pages/slides/Slide3'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Section } from '../../App'
import { useEffect } from 'react'
import * as d3 from 'd3'
import { url } from '../../utils/router'

const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
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

export interface ICountry {
    properties: Record<string, string>
    selected?: boolean
    equalityData?: IGenderEqualityData
}

export interface IGeoData {
    features: ICountry[]
}

const PageWrapper = () => {
    const [geoData, setGeoData] = useState(null as IGeoData | null)
    const [country, setCountry] = useState(null as ICountry | null)
    const [slide, setSlide] = useState(0)

    const [feature, setFeature] = useState('gender_equality_index' as GenderEqualityFeature)
    const [year, setYear] = useState('2005' as GenderEqualityYear)
    const [countryCodeToCountry, setCountryCodeToCountry] = useState({} as Record<string, ICountry>)

    useEffect(() => {
        // Load initial data
        if (!geoData) {
            d3.json(url('/assets/custom.geo.json')).then(json => {
                const mergedFeatures: ICountry[] = json.features.map((feature: any) => {
                    const countryKey = feature.properties.iso_a2 as keyof typeof genderEqualityData
                    if (genderEqualityData[countryKey]) {
                        return {
                            ...feature,
                            equalityData: genderEqualityData[countryKey],
                        }
                    }
                    return feature
                })
                setGeoData({ features: mergedFeatures })
                setCountryCodeToCountry(
                    mergedFeatures
                        .filter((d: ICountry) => d.equalityData)
                        .reduce((agg: Record<string, ICountry>, d: ICountry) => {
                            agg[d.properties.iso_a2] = d

                            return agg
                        }, {})
                )
            })
        }
    })

    const slideProps = { country, setCountry, year, setYear, feature, setFeature, countryCodeToCountry }

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
                            geoData={geoData}
                            setGeoData={setGeoData}
                        />
                    </Col>
                    <Col md={14}>
                        <StyledLayoutContent>
                            <StyledContentContainer>
                                <TransitionGroup>
                                    <CSSTransition key={slide} timeout={{ enter: 500, exit: 500 }} classNames={'fade'}>
                                        <Section style={{ padding: '2.5vw' }}>
                                            {slide === 0 && <Slide1 {...slideProps} />}
                                            {slide === 1 && <Slide2 {...slideProps} />}
                                            {slide === 2 && <Slide6 {...slideProps} />}
                                            {slide === 3 && <Slide3 {...slideProps} />}
                                            {slide === 4 && <Slide4 {...slideProps} />}
                                            {slide === 5 && <Slide5 {...slideProps} />}
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
