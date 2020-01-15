import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem (){
	return (
		<CollectionItemContainer>
			<div className="order-img">
				<img src={OrderPicture} alt="order" />
			</div>
			<span>Order #:12321758</span>
			<span>01/04/2020</span>
			<span>$45.00</span>
			<span>Dispatched</span>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
