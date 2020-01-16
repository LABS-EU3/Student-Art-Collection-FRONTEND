import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from "query-string";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { axiosWithBase } from '../../AxiosCustom';

import {
	SchoolsCollectionContainer,
	MainContainer,
	ButtonsContainer,
} from './SchoolsSoldItemsStyle';
import Spinner from '../../Components/Spinner'
import CollectionItem from './CollectionItem';
import CustomButton from './CustomButton';

function SchoolsSoldItems (props){
	const [ artSold, setArtSold ] = useState(null);
	const {status} = queryString.parse(props.location.search)
	const id = props.loggedInUser._id;
useEffect(() => {
	const orderStatus = status ? status : 'all'
		axiosWithBase()
			.get(`/art/sold/order/${id}?status=${orderStatus}`)
			.then((res) => setArtSold(res.data))
			.catch((err) => toast.error('could not fetch items'));
	}, [status]);

	return (
		<MainContainer>
			<ButtonsContainer>
				<CustomButton
					status='all'
				>
				All
				</CustomButton>
				<CustomButton
					status='pending'	
				>Pending
				</CustomButton>
				<CustomButton
					status='sent'
				>Sent
				</CustomButton>
				{/* <hr className="line"/> */}
			</ButtonsContainer>
			<SchoolsCollectionContainer>
				{artSold ? artSold.length === 0 ? (
					<h2 className="not-sold">You don't have any sold art</h2>
				) : (
					artSold.map((art) => (
						<CollectionItem art={art} />
					))
				): <Spinner/>}
			</SchoolsCollectionContainer>
			<ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    closeButton={false}
                    style={{
                        fontSize: "1.3rem",
                        textAlign: "center"
                    }}
                />
		</MainContainer>
	);
}

export default connect((state) => state)(SchoolsSoldItems);
