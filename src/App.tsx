import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from './components/layout/PageWrapper'
import Dashboard from './pages/Dashboard'
import { url } from './utils/router'

const App: React.FC = () => {
    return (
        <BrowserRouter basename={url('')}>
            <PageWrapper>
                <Dashboard />
            </PageWrapper>
        </BrowserRouter>
    )
}

export default App
