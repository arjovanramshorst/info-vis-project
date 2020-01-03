import * as React from 'react'
import styled from 'styled-components'

interface ITransitionWrapper {}

const StyledTransition = styled.div`
    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`

const TransitionWrapper: React.FunctionComponent<ITransitionWrapper> = ({ children }) => (
    <StyledTransition>{children}</StyledTransition>
)

export default TransitionWrapper
