import React, { Fragment } from 'react';
import { CustomButton2, CustomButtonWrapper } from './BuyerOrderItemsStyle';

function CustomButton (props){
	// return <CustomButton2 href={`/selling/sold?status=${props.status}`} />;
	return (
		<CustomButtonWrapper>
			<CustomButton2>all</CustomButton2>
			<CustomButton2>pending</CustomButton2>
			<CustomButton2>sent</CustomButton2>
		</CustomButtonWrapper>
	);
}

export default CustomButton;
