import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { axiosWithBase } from '../../AxiosCustom';

import { BuyerItemsContainer, MainContainer, ButtonsContainer } from './BuyerOrderItemsStyle';
import BuyerButtons from './CustomButton2';
import Spinner from '../../Components/Spinner';
import BuyerItem from './BuyerItem';

function BuyerOrderItems (props){
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
				<BuyerButtons />
				{/* <BuyerButton status="all">All</BuyerButton>
				<BuyerButton>Pending</BuyerButton>
				<BuyerButton>Sent</BuyerButton> */}
				{/* <hr className="line"/> */}
			</ButtonsContainer>
			<BuyerItemsContainer>
				{/* {artSold ? artSold.length === 0 ? (
					<h1 className="not-sold">You haven't ordered any art</h1>
				) : (
					artSold.map((art) => <CollectionItem art={art} />)
				) : (
					<Spinner />
				)} */}
				<BuyerItem />
				<BuyerItem />
				<BuyerItem />
			</BuyerItemsContainer>
		</MainContainer>
	);
}

export default connect((state) => state)(BuyerOrderItems);
