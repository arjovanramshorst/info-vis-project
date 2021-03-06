import * as React from 'react'
// @ts-ignore
import { BrowserRouter, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import { url } from './utils/router'
import Welcome from './components/pages/Welcome'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import PageWrapper from './components/layout/PageWrapper'

const TransitionWrapper: React.FC<RouteComponentProps> = ({ location, children }) => {
    return (
        <TransitionGroup style={{ position: 'relative' }}>
            <CSSTransition key={location.key} timeout={{ enter: 500, exit: 500 }} classNames={'fade'}>
                <Section>
                    <Switch location={location}>{children}</Switch>
                </Section>
            </CSSTransition>
        </TransitionGroup>
    )
}

const RouterTransitionWrapper = withRouter(TransitionWrapper)

export const Section = styled.section`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    &.fade-enter {
        opacity: 0;
        animation-duration: 0.5s !important;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
        &.fade-enter-active {
            animation-name: fadeIn;
            animation-play-state: running;
        }
    }

    &.fade-appear {
        opacity: 0;
        animation-duration: 0.5s !important;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
        &.fade-appear-active {
            animation-name: fadeIn;
            animation-play-state: running;
        }
    }

    &.fade-exit {
        opacity: 1;
        animation-duration: 0.5s !important;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
        &.fade-exit-active {
            animation-name: fadeOut;
            animation-play-state: running;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

const StyledTooltip = styled.div`
    position: absolute;
    text-align: center;
    padding: 8px;
    font: 12px sans-serif;
    background: lightsteelblue;
    border: 0;
    border-radius: 8px;
    pointer-events: none;
`

const App: React.FC = () => {
    return (
        <React.Fragment>
            <BrowserRouter basename={url('')}>
                <RouterTransitionWrapper>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/slides" component={PageWrapper} />
                </RouterTransitionWrapper>
            </BrowserRouter>
            <StyledTooltip className={'tooltip'} style={{ opacity: 0 }} />
        </React.Fragment>
    )
}

export default App
