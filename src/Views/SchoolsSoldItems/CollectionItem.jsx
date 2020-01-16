import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem ({ art }){
	return (
		<CollectionItemContainer>
			<div className="order-img">
				<img src={art.transactionId.productId.picture} alt="order-image" />
			</div>
			<span>Order:{art._id} </span>
			<span>01/04/2020</span>
			<span>${art.transactionId.productId.price}</span>
			<span>{art.status}</span>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
