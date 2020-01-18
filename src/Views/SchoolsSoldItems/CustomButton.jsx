import React from 'react';
import { CustomButton} from './SchoolsSoldItemsStyle';

function CustomButtonComponent (props){
	const path = `/selling/sold?status=${props.status}`;
	return (
			<CustomButton
				strict
				to={path}
				activeStyle={{
					fontWeight: 'bold',
                    color: 'orange',
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
