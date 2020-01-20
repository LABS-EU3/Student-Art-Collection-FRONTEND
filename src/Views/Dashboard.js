import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/Actions/actionCreators';

import DashNav from '../Components/DashboardComponents/DashNav';
import Profile from '../Components/DashboardComponents/Profile';
import SellingNav from '../Components/SellingDashboardComponents/SellingNav';
import BuyerOrderItems from './BuyerOrderItems/BuyerOrderItems';
import SchoolsSoldItems from './SchoolsSoldItems/SchoolsSoldItems';
import UploadedArt from '../Components/UploadedArtComponent/UploadedArt'


const DashboardContainer = styled.div`
	width: 100vw;
	height: 92vh;
	background-color: #f9f9f9;
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

		@media (max-width: 500px) {
			width: 100%;
			height: 100%;
		}

		.right-side {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
function Dashboard (){
	return (
		<DashboardContainer>
			<div className="dashboard">
				<Route path="/myaccount" component={DashNav} />
				<Route path="/selling" component={SellingNav} />
				<div className="right-side">
					<Route exact path="/myaccount" component={Profile} />
					<Route exact path= "/myaccount/orders" component={BuyerOrderItems}/>
					<Route exact path="/selling/sold" component={SchoolsSoldItems} />
					<Route exact path="/selling/forsale" component={UploadedArt} />
				</div>
			</div>
		</DashboardContainer>
	);
}

export default connect((state) => state, actions)(Dashboard);
