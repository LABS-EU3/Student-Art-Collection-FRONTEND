import React from 'react';
import { CustomButton } from './BuyerOrderItemsStyle';

function CustomButton2 (props){
	return <CustomButton
        href={`/selling/sold?status=${props.status}`}
    />;
}

export default CustomButton;
