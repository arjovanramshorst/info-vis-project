import * as React from 'react'
import { PageHeader } from 'antd'
import WorldMap from '../components/charts/world/WorldMap'

interface IDashboard {}

class Dashboard extends React.Component<IDashboard> {
    render() {
        const {} = this.props

        return null
        // return <WorldMap data={[1,2,3]} />
    }
}

export default Dashboard
