import React from 'react';
import { CustomButton} from './SchoolsSoldItemsStyle';

function CustomButtonComponent (props){
	const path = `/selling/sold?status=${props.status}`;
	return (
			<CustomButton
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
			</CustomButton>
	);
}

export default CustomButtonComponent;
