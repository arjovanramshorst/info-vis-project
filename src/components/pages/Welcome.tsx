import { Col, Row } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

const LearnMoreButton = styled.button`
    font-family: HelveticaNeue-Light, serif;
    font-size: 20px;
    background: none;
    color: black;
    border: 8px solid black;
    letter-spacing: 1vw;
    padding-left: 1vw;
    height: 10vh;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: black;
        color: white;
    }
`

const Title = styled.h1`
    font-family: HelveticaNeue-CondensedBold, serif;
    font-size: 72px;
    margin-bottom: 10px;
    line-height: 1.15;
    color: rgba(0, 0, 0, 0.65);
`

const SubTitle = styled.h2`
    font-family: HelveticaNeue-Light, serif;
    font-size: 30px;
    line-height: 1.15;
    padding-bottom: 10px;
    color: rgba(0, 0, 0, 0.65);
`

const Welcome = () => {
    return (
        <Row type="flex" style={{ paddingLeft: '8vw', paddingTop: '16vh' }}>
            <Col md={8}>
                <Title>
                    GENDER <br />
                    EQUALITY <br />
                    IN EUROPE
                </Title>
                <SubTitle>
                    Infographic highlighting <br />
                    the gender equality <br />
                    condition in Europe
                </SubTitle>

                <Link to={'/slides'}>
                    <LearnMoreButton>LEARN MORE</LearnMoreButton>
                </Link>
            </Col>
        </Row>
    )
}

export default Welcome
