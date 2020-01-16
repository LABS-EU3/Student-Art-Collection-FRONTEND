import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem ({ art }){
	return (
		<CollectionItemContainer>
			<div className="order-img">
				{/* <img src={art.transactionId.productId.picture} alt="order-image" /> */}
				<img src={OrderPicture} alt="order-image" />
			</div>
			<div className="order-section">
				<h3>Order:{art._id} </h3>
				<h3>01/04/2020</h3>
				<h3>${art.transactionId.productId.price}</h3>
				<h3>{art.status}</h3>
			</div>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
