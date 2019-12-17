import * as React from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import SlideshowSteps from './SlideshowSteps'
import WorldMap, { ICountry } from '../charts/world/WorldMap'
import { useRef, useState } from 'react'

interface IPageWrapper {}

interface IMenuItemProps {
    onClick?: (param: any | undefined) => void
    to?: string
    children: React.ReactNode
}

const MenuItem = ({ onClick, to, ...props }: IMenuItemProps) =>
    onClick ? (
        <Menu.Item {...props} onClick={onClick} key={to}>
            <span>{props.children}</span>
            {to && <Link to={to} />}
        </Menu.Item>
    ) : (
        <Menu.Item {...props} key={to}>
            <span>{props.children}</span>
        </Menu.Item>
    )

const StyledLayoutContent = styled(Layout.Content)`
    padding: 50px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);
`

const StyledContentContainer = styled.div`
    background: #fff;
    padding: 24px;
    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);
`

const PageWrapper = () => {
    const [country, setCountry] = useState(null as ICountry | null)

    return (
        <Layout>
            <SlideshowSteps />
            <Row>
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
        </Layout>
    )
}

export default withRouter(PageWrapper)
