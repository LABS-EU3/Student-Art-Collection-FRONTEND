import React from 'react';
import { SchoolsDashboardContainer, ArrowWrapper, MainContainer } from './SchoolsDasboardStyle';
import { ReactComponent as LeftArrow } from '../../Assets/images/left_arrow.svg';
import Sidebar from './Sidebar';

function SchoolsDashboard (){
	return (
		<MainContainer>
			<SchoolsDashboardContainer>
				<Sidebar />
				{/* <ArrowWrapper>
            <LeftArrow width="70%"/>
        </ArrowWrapper> */}
			</SchoolsDashboardContainer>
		</MainContainer>
	);
}


export default SchoolsDashboard;
