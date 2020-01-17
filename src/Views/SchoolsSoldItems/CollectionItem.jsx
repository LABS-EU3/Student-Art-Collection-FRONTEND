import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem ({ art }){
const date = new Date('2020-01-07T10:51:54.885+00:00').toLocaleDateString();
	return (
		<CollectionItemContainer>
			<div className="order-img">
				{/* <img src={art.transactionId.productId.picture} alt="order-image" /> */}
				<img src={OrderPicture} alt="product" />
			</div>
			<div className="order-section">
				<h3>Order:{art._id} </h3>
				<h3>{date}</h3>
				<h3>${art.transactionId.productId.price}</h3>
				<h3>{art.status}</h3>
			</div>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
