import React from 'react';
import { CustomButton, CustomButtonWrapper } from './SchoolsSoldItemsStyle';

function CustomButtonComponent (props){
	const path = `/selling/sold?status=${props.status}`;
	return (
		<CustomButtonWrapper>
			<CustomButton
				strict
				to={path}
				activeStyle={{
					fontWeight: 'bold',
					color: 'red',
				}}
				isActive={(_, { search }) => {
					const t = search.split('');
					t.shift();
					return t.join('') === `status=${props.status}`;
				}}>
				{props.children}
			</CustomButton>
		</CustomButtonWrapper>
	);
}

export default CustomButtonComponent;
