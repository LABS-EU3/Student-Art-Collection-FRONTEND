import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { axiosWithBase } from '../../AxiosCustom';

import {
	SchoolsCollectionContainer,
	MainContainer,
	CustomButton,
	ButtonsContainer,
} from './SchoolsSoldItemsStyle';
import Spinner from '../../Components/Spinner';
import CollectionItem from './CollectionItem';

function SchoolsSoldItems (props){
	const [ artSold, setArtSold ] = useState(null);

	const id = props.loggedInUser._id;
	console.log(props);
	useEffect(() => {
		axiosWithBase()
			.get(`/art/sold/order/${id}?status=all`)
			.then((res) => setArtSold(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(artSold);

	return (
		<MainContainer>
			<ButtonsContainer>
				<CustomButton status="all">All</CustomButton>
				<CustomButton>Pending</CustomButton>
				<CustomButton>Sent</CustomButton>
				{/* <hr className="line"/> */}
			</ButtonsContainer>
			<SchoolsCollectionContainer>
				{artSold ? artSold.length === 0 ? (
					<h1 className="not-sold">You don't have any sold art</h1>
				) : (
					artSold.map((art) => <CollectionItem art={art} />)
				) : (
					<Spinner />
				)}
			</SchoolsCollectionContainer>
		</MainContainer>
	);
}

export default connect((state) => state)(SchoolsSoldItems);
