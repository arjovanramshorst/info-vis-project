import * as React from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

interface IPageWrapper {
}

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

class PageWrapper extends React.Component<IPageWrapper & RouteComponentProps> {
    render() {
        const { location } = this.props

        return (
            <Layout>
                <Layout.Header className="header">
                    <Row type="flex">
                        <Col>
                            <Menu
                                selectedKeys={[location.pathname]}
                                theme="dark"
                                mode="horizontal"
                                style={{ lineHeight: '64px' }}
                            >
                                <MenuItem to={'/'}>
                                    Dashboard
                                </MenuItem>
                            </Menu>
                        </Col>
                    </Row>
                </Layout.Header>
                <StyledLayoutContent>
                    <StyledContentContainer>
                        {this.props.children}
                    </StyledContentContainer>
                </StyledLayoutContent>
                <Layout.Footer style={{ textAlign: 'center' }}>
                    <p>InfoVis 2019 Q2 (Group 25)</p>
                </Layout.Footer>
            </Layout>
        )
    }
}

export default withRouter(PageWrapper)
