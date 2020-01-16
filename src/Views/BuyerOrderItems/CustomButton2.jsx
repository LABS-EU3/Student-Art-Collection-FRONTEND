import React from 'react';
import { CustomButton2 } from './BuyerOrderItemsStyle';

function CustomButton (props){
	return <CustomButton2 href={`/selling/sold?status=${props.status}`} />;
}

export default CustomButton;
