import React from 'react';
import { StyledNavItem } from './SchoolsDasboardStyle';
import { NavLink } from 'react-router-dom';

function SideNavItem (props){
	return (
		<StyledNavItem>
			<a>{props.text}</a>
		</StyledNavItem>
	);
}

export default SideNavItem;
