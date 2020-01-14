import React, {useEffect} from 'react';

import { SchoolsCollectionContainer, MainContainer } from './SchoolsSoldItemsStyle';
import CollectionItem from './CollectionItem';

function SchoolsSoldItems (){



	return (
		<MainContainer>
			<SchoolsCollectionContainer>
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
			</SchoolsCollectionContainer>
		</MainContainer>
	);
}

export default SchoolsSoldItems;
