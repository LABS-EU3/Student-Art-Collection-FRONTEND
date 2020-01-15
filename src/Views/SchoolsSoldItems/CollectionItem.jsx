import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem ({art}){
	return (
		<CollectionItemContainer>
			<div className="order-img">
				<img src={art.transactionId.productId.picture} alt="order-image" />
			</div>
			<span>Order #:12321758</span>
			<span>01/04/2020</span>
			<span>$45.00</span>
			<span>Dispatched</span>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
