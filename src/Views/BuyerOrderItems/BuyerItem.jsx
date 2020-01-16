import React from 'react';
import { CollectionItemContainer } from './BuyerOrderItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function BuyerItem ({ art }){
	return (
		<CollectionItemContainer>
			<div className="order-img">
				{/* <img src={art.transactionId.productId.picture} alt="order-image" /> */}
				<img src={OrderPicture} alt="order-image" />
			</div>
			<span>Order #:12321758</span>
			<span>01/04/2020</span>
			<span>$45.00</span>
			<span>Dispatched</span>
		</CollectionItemContainer>
	);
}

export default BuyerItem;
