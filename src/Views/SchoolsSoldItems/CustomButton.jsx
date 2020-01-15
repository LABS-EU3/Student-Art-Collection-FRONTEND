import React from 'react';
import { CustomButton } from './SchoolsSoldItemsStyle';

function CustomButton (props){
	return <CustomButton
        href={`/selling/sold?status=${props.status}`}
    />;
}

export default CustomButton;
