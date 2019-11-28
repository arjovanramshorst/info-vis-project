import * as React from 'react'
import { PageHeader } from 'antd'

interface IDashboard {

}

class Dashboard extends React.Component<IDashboard> {

    render() {
        const {} = this.props

        return <PageHeader
            title="Dashboard for InfoVis Project"
            subTitle="Some dataset description"
        >

        </PageHeader>
    }
}

export default Dashboard
