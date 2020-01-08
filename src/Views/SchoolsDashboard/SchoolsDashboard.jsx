import React from 'react'
import {SchoolsDashboardContainer, ArrowWrapper} from './SchoolsDasboardStyle'
import { ReactComponent as LeftArrow } from '../../Assets/images/left_arrow.svg';
import Sidebar from './Sidebar'

function SchoolsDashboard() {
    return (
        <SchoolsDashboardContainer>
        <Sidebar/>
        {/* <ArrowWrapper>
            <LeftArrow width="70%"/>
        </ArrowWrapper> */}

        </SchoolsDashboardContainer>
    )
}

export default SchoolsDashboard
