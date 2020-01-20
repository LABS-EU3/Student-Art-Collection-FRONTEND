import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosWithBase } from '../../AxiosCustom';

import {
	MainContainer,
	StyledButtonContainer,
	StyledOrderContainer
} from './BuyerOrderItemsStyle';

import Spinner from '../../Components/Spinner';
import BuyerItem from './BuyerItem';
import CustomButton from './CustomButton2'

function BuyerOrderItems(props) {
	const [artSold, setArtSold] = useState([]);
	const [spinner, setSpinning] = useState(true);
	const { status } = queryString.parse(props.location.search);
	const id = props.loggedInUser._id;
	useEffect(() => {
		const orderStatus = status ? status : 'all';
		axiosWithBase()
			.get(`/art/sold/order/buyer/${id}?status=${orderStatus}`)
			.then((res) => {
				setSpinning(false);
				setArtSold(res.data);
			})
			.catch(() => {
				setSpinning(false);
				toast.error('Could not retrieve your orders');
			});
	}, [status]);
	if (!spinner) {
		return (
			<MainContainer>
				<StyledButtonContainer>
					<CustomButton status="all">All</CustomButton>
					<CustomButton status="pending">Pending</CustomButton>
					<CustomButton status="sent">Sent</CustomButton>
				</StyledButtonContainer>
				<StyledOrderContainer>
					{artSold.length > 0
						? artSold.map((art) => <BuyerItem key={art._id} art={art} />)
						: <div className="nothing">Nothing here yet</div>
					}
				</StyledOrderContainer>
				<ToastContainer
					position="bottom-center"
					bodyClassName="toast"
					autoClose={3000}
					closeButton={false}
				/>
			</MainContainer>
		);
	}

	return (
		<Spinner />
	);
}

export default connect((state) => state)(BuyerOrderItems);
