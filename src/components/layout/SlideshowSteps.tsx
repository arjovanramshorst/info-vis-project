import * as React from 'react'
import { useState } from 'react'
import { Divider, Steps } from 'antd'
import styled from 'styled-components'

const { Step } = Steps

const StyledStepsContainer = styled.div`
    background-color: #ffffff;
    padding: 25px 25px 0 25px;
`

const SlideshowSteps = ({}) => {
    const [step, setStep] = useState(0)

    return (
        <StyledStepsContainer>
            <Steps progressDot current={step} onChange={setStep}>
                <Step title="The gender gap in the EU" description="" />
                <Step title="We are on our way, but slowly" description="" />
                <Step title="Some countries are already doing great" description="" />
                <Step title="But others are staying behind" description="" />
                <Step title="A+ for effort" description="" />
                <Step title="Core domains" description="" />
                <Step title="See for yourself" description="" />
            </Steps>
            <Divider />
        </StyledStepsContainer>
    )
}

export default SlideshowSteps
