import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { axiosWithBase } from '../../AxiosCustom';

import { SchoolsCollectionContainer, MainContainer, CustomButton, ButtonsContainer } from './SchoolsSoldItemsStyle';
import CollectionItem from './CollectionItem';

function SchoolsSoldItems (props){
	const [ artSold, setArtSold ] = useState(null);

	const id = props.loggedInUser._id;

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
			<CustomButton>All</CustomButton>
			<CustomButton>Pending</CustomButton>
			<CustomButton>Sent</CustomButton>
			</ButtonsContainer>
			<SchoolsCollectionContainer>
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
			</SchoolsCollectionContainer>
		</MainContainer>
	);
}

export default connect((state) => state)(SchoolsSoldItems);
