import React from 'react'
import styled from 'styled-components'

const DashboardContainer = styled.div`
width: 100vw;
height: 92vh;
background-color: #F9F9F9
display: flex;
justify-content: center;
align-items: center;

    .dashboard {
        width: 85%;
        height: 85%;
        background-color: white;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);
        border-radius: 5px;
    }
`
function BuyerDashboard() {
    return (
        <DashboardContainer>
            <div className="dashboard">

            </div>
        </DashboardContainer>
    )
}

export default BuyerDashboard;