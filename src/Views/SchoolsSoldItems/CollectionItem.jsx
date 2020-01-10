import React from 'react';
import { CollectionItemContainer } from './SchoolsSoldItemsStyle';

function CollectionItem (){
	return (
		<CollectionItemContainer>
			<p>Order</p><br/>
			<p>01.05.2020</p><br/>
			<p>$45</p><br/>
			<p>Dispatched</p><br/>
		</CollectionItemContainer>
	);
}

export default CollectionItem;
