import React from 'react';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../../Assets/icons/icons';
import { StyledSidebar } from './SchoolsDasboardStyle';
import { ReactComponent as School } from '../../Assets/images/school.svg';
import { ReactComponent as LeftArrow } from '../../Assets/images/left_arrow.svg';

function Sidebar (){
	return (
		<StyledSidebar>
			<School width="40%" />
			<SideNavItem text={sidebarTexts.selling} path="/selling" />
			<SideNavItem text={sidebarTexts.sold} path="/sold" />
			<SideNavItem text={sidebarTexts.messages} path="/messages" />
			<SideNavItem text={sidebarTexts.students} path="/students" />
			<SideNavItem text={sidebarTexts.upload_art} path="/uploadart" />
			<LeftArrow width="15%" />
		</StyledSidebar>
	);
}

export default Sidebar;
