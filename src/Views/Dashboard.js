import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/Actions/actionCreators';
import firebase from "../config/firebaseConfig";

import DashNav from '../Components/DashboardComponents/DashNav';
import Profile from '../Components/DashboardComponents/Profile';
import SellingNav from '../Components/SellingDashboardComponents/SellingNav';
import BuyerOrderItems from './BuyerOrderItems/BuyerOrderItems';
import SchoolsSoldItems from './SchoolsSoldItems/SchoolsSoldItems';
import UploadedArt from '../Components/UploadedArtComponent/UploadedArt'
import Messaging from './Messaging';
import MessageFulLView from '../Components/MessagingComponents/MessageFullView'

const db = firebase.firestore();


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
function Dashboard (props){


	useEffect(() => {
		const fetchMessages = async () => {
	
		  try {
			const snapshot = await db
			  .collection("messages")
			  .where('receiver_id', "==", props.loggedInUser._id)
			  .get();
	
			const messages = snapshot.docs.map(x =>
			  Object.assign({ id: x.id }, x.data(), {
				sendAt: x.data().sendAt.toDate()
			  })
			);
	
			props.retrieveInboxMessages(messages);
		  } catch (error) {
			props.retrieveInboxMessages([]);
		  }
		};
		fetchMessages();
	  }, []);
	return (
		<DashboardContainer>
			<div className="dashboard">
				<Route path="/myaccount" component={DashNav} />
				<Route path="/selling" component={SellingNav} />
				<div className="right-side">
					<Route exact path="/myaccount" component={Profile} />
					<Route path= "/myaccount/orders" component={BuyerOrderItems}/>
					<Route exact path= "/myaccount/messages" component={Messaging}/>
					<Route exact path= "/myaccount/messages/:id" component={MessageFulLView}/>
					<Route exact path="/selling/sold" component={SchoolsSoldItems} />
					<Route exact path="/selling/forsale" component={UploadedArt} />
				</div>
			</div>
		</DashboardContainer>
	);
}

export default connect((state) => state, actions)(Dashboard);
