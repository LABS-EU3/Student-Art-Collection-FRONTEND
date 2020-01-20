import React from 'react';
import { CollectionItemContainer } from './BuyerOrderItemsStyle';

function BuyerItem ({ art }){
	const date = new Date(art.updatedAt).toLocaleDateString();
	return (
		<CollectionItemContainer>
			<div className="order-img">
				<img src={art.transactionId.productId.picture} alt="order" />
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

export default BuyerItem;
