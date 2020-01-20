import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavLink } from 'react-router-dom';

import { axiosWithBase } from '../../AxiosCustom';

import {
	BuyerItemsContainer,
	MainContainer,
	ButtonsContainer,
	CustomButtonWrapper,
	StyledButtonContainer
} from './BuyerOrderItemsStyle';

import Spinner from '../../Components/Spinner';
import BuyerItem from './BuyerItem';
import CustomButton from './CustomButton2'

function BuyerOrderItems(props) {
	const [artSold, setArtSold] = useState(null);
	const { status } = queryString.parse(props.location.search);
	const id = props.loggedInUser._id;
	useEffect(() => {
		const orderStatus = status ? status : 'all';
		axiosWithBase()
			.get(`/art/sold/order/buyer/${id}?status=${orderStatus}`)
			.then((res) => setArtSold(res.data))
			.catch(() => toast.error('could not fetch items'));
	}, [status]);

	return (
		<MainContainer>
			<StyledButtonContainer>
				{/* <NavLink to='/myaccount/orders/?status=all'>All</NavLink>
				<NavLink to='/myaccount/orders/?status=pending' >Pending</NavLink>
				<NavLink to='/myaccount/orders/?status=sent' >Sent</NavLink> */}
				<CustomButton status="all">All</CustomButton>
				<CustomButton status="pending">Pending</CustomButton>
				<CustomButton status="sent">Sent</CustomButton>
			</StyledButtonContainer>
		</MainContainer>
	);
}

export default connect((state) => state)(BuyerOrderItems);
