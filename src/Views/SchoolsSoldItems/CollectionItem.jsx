import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';
import OrderPicture from '../../Assets/order.jpg';

function CollectionItem (){
	return (
		<CollectionItemContainer>
			{/* <div className="order-img"> */}
			<img src={OrderPicture} alt="order" />
			{/* </div> */}

			<span>Order</span>

			<span>01.05.2020</span>

			<span>$45</span>

			<span>Dispatched</span>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
