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

const temporaryData = [
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "123",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1234",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1235",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1236",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1237",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1238",
		status: "pending"
	},
	{
		transactionId: {
		  productId: {
			picture:
			  "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
			price: 123
		  }
		},
		_id: "1239",
		status: "pending"
	}
  ];

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
		return (
			<MainContainer>
			{spinner && <Spinner />}
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
					position="top-center"
					autoClose={2000}
					hideProgressBar
					pauseOnVisibilityChange
					draggable
					pauseOnHover
					closeButton={false}
					style={{
						'font-size': '1.5rem',
						width: '400px',
						'text-align': 'center'
				}}
      />
			</MainContainer>
		);
	}

export default connect((state) => state)(BuyerOrderItems);
