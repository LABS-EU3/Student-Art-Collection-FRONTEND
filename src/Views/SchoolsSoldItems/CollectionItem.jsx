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
				<p>Order:{art._id} </p>
				<p>01/04/2020</p>
				<p>${art.transactionId.productId.price}</p>
				<p>{art.status}</p>
			</div>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
