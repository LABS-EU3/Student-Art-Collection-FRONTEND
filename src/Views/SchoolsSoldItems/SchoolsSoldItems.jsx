import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithBase } from '../../AxiosCustom'

import { fetchCollectionsStart } from '../../store/Actions/actionCreators';

import { SchoolsCollectionContainer, MainContainer } from './SchoolsSoldItemsStyle';
import CollectionItem from './CollectionItem';

function SchoolsSoldItems ({ fetchCollectionsStart }){
	useEffect(
		() => {
			fetchCollectionsStart();
		},
		[],
	);

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

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(
  null,
  mapDispatchToProps
)(SchoolsSoldItems);
