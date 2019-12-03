import * as React from 'react'
import { PageHeader } from 'antd'
import WorldMap from '../components/charts/world/WorldMap'

interface IDashboard {

}

class Dashboard extends React.Component<IDashboard> {

    render() {
        const {} = this.props

        return <PageHeader
            title="Dashboard for InfoVis Project"
            subTitle="Some dataset description"
        >
            <WorldMap data={[1,2,3]} />

        </PageHeader>
    }
}

export default Dashboard
