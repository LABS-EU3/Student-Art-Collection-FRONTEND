import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosWithBase } from '../../AxiosCustom';

import {
	SchoolsCollectionContainer,
	MainContainer,
	ButtonsContainer,
	CustomButtonWrapper,
} from './SchoolsSoldItemsStyle';
import Spinner from '../../Components/Spinner';
import CollectionItem from './CollectionItem';
import CustomButton from './CustomButton';

function SchoolsSoldItems (props){
	const [ artSold, setArtSold ] = useState(null);
	const { status } = queryString.parse(props.location.search);
	const id = props.loggedInUser._id;
	useEffect(
		() => {
			const orderStatus = status ? status : 'all';
			axiosWithBase()
				.get(`/art/sold/order/${id}?status=${orderStatus}`)
				.then((res) => setArtSold(res.data))
				.catch((err) => toast.error('could not fetch items'));
		},
		[ status ],
	);

	return (
		<MainContainer>
			<ButtonsContainer>
				<CustomButtonWrapper>
					<CustomButton status="all">All</CustomButton>
					<CustomButton status="pending">Pending</CustomButton>
					<CustomButton status="sent">Sent</CustomButton>
				</CustomButtonWrapper>
			</ButtonsContainer>

			<SchoolsCollectionContainer>
				{artSold ? artSold.length === 0 ? (
					<h1 className="not-sold">You haven't ordered any art</h1>
				) : (
					artSold.map((art) => <CollectionItem art={art} key={art._id}/>)
				) : (
					<div style={{display:'flex', justifyContent: 'flex-end'}}>
						<Spinner />
					</div>
				)}
				<ToastContainer
					position="bottom-center"
					autoClose={3000}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
					closeButton={false}
					style={{
						fontSize: '1.3rem',
						textAlign: 'center',
					}}
				/>
			</SchoolsCollectionContainer>
		</MainContainer>
	);
}

export default connect((state) => state)(SchoolsSoldItems);