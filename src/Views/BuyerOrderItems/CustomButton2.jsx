import React from 'react';
import { StyledButton } from './BuyerOrderItemsStyle';

function CustomButton (props){
	const path = `/myaccount/orders?status=${props.status}`;
	return (
		<StyledButton
				strict
				to={path}
				activeStyle={{
					borderBottom: '1px solid black',
					color: 'rgba(0,0,0,1)',
				}}
				isActive={(_, { search }) => {
					const t = search.split('');
					t.shift();
					return t.join('') === `status=${props.status}`;
				}}>
				{props.children}
			</StyledButton>
	);
}

export default CustomButton;
