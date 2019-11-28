import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from './components/layout/PageWrapper'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
    return (
        <BrowserRouter basename={'info-vis-project'}>
            <PageWrapper>
                <Dashboard />
            </PageWrapper>
        </BrowserRouter>
    )
}

export default App
