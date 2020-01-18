import React from 'react';
import { CustomButton2, CustomButtonWrapper } from './BuyerOrderItemsStyle';

function CustomButton (props){
	const path = `/myaccount/orders?status=${props.status}`;
	return (
		<CustomButtonWrapper>
		<CustomButton2
				strict
				to={path}
				activeStyle={{
					fontWeight: 'normal',
					color: '#F79F1F',
				}}
				isActive={(_, { search }) => {
					const t = search.split('');
					t.shift();
					return t.join('') === `status=${props.status}`;
				}}>
				{props.children}
			</CustomButton2>
		</CustomButtonWrapper>
	);
}

export default CustomButton;
