import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import DashNav from '../Components/BuyerDashboardComponents/DashNav'

const DashboardContainer = styled.div`
width: 100vw;
height: 92vh;
background-color: #F9F9F9
display: flex;
justify-content: center;
align-items: center;

    .dashboard {
        width: 85%;
        height: 90%;
        background-color: white;
        box-shadow: 0px 13px 13px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        display: flex;
    }

`
function BuyerDashboard() {

    return (
        <DashboardContainer>
            <div className="dashboard">
                <Route path='/myaccount' component={DashNav} />
            </div>
        </DashboardContainer>
    )
}

export default BuyerDashboard;