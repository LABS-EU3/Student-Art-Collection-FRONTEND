import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../store/Actions/actionCreators'

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

        .right-side{
            width: 50%;
            background-color: dodgerblue;
            color: red;
            font-size: 5rem;
        }
    }
`
function BuyerDashboard(props) {

    return (
        <DashboardContainer>
            <div className="dashboard">
                <Route path='/myaccount' component={DashNav} />
            </div>
        </DashboardContainer>
    )
}

export default connect(state => state, actions)(BuyerDashboard);