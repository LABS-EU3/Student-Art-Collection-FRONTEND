import React from 'react';
import { SchoolsDashboardContainer, MainContainer } from './SchoolsDasboardStyle';
import CollectionItem from './CollectionItem';

function SchoolsDashboard (){
	return (
		<MainContainer>
			<SchoolsDashboardContainer>
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
			</SchoolsDashboardContainer>
		</MainContainer>
	);
}

export default SchoolsDashboard;
