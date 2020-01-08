import React from 'react'
import {SchoolsDashboardContainer} from './SchoolsDasboardStyle'
import Sidebar from './Sidebar'

function SchoolsDashboard() {
    return (
        <SchoolsDashboardContainer>
        <Sidebar/>
            <h3>School's Dashboard</h3>
        </SchoolsDashboardContainer>
    )
}

export default SchoolsDashboard
