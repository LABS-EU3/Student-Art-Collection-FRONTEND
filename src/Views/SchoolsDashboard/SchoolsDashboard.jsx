import React from 'react';
import { SchoolsDashboardContainer, MainContainer } from './SchoolsDasboardStyle';
import CollectionItem from './CollectionItem';
import { ReactComponent as LeftArrow } from '../../Assets/images/left_arrow.svg';
import Sidebar from './Sidebar';

function SchoolsDashboard (){
	return (
		<MainContainer>
			<SchoolsDashboardContainer>
				<Sidebar />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />

				{/* <ArrowWrapper>
            <LeftArrow width="70%"/>
        </ArrowWrapper> */}
			</SchoolsDashboardContainer>
		</MainContainer>
	);
}

export default SchoolsDashboard;
