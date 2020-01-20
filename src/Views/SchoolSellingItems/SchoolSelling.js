import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosWithBase } from '../../AxiosCustom';

import {
	MainContainer,
	StyledOrderContainer
} from '../BuyerOrderItems/BuyerOrderItemsStyle';
import Spinner from '../../Components/Spinner';
import SchoolCollectionItem from './SchoolCollectionItem';

function SchoolSelling(props) {
	const [artSold, setArtSold] = useState([]);
	const [spinner, setSpinning] = useState(true);
	const id = props.loggedInUser._id;
	useEffect(
		() => {
			axiosWithBase()
				.get(`/art/selling/${id}`)
				.then((res) => {
					setSpinning(false);
					setArtSold(res.data);
				})
				.catch(() => {
					toast.error('Could not retrieve your items')
					setSpinning(false)
				});
		},
		[],
	);
	if (!spinner) {
		return (
			<MainContainer>
				<StyledOrderContainer>
					{artSold.length > 0
						? artSold.map((art) => <SchoolCollectionItem art={art} />)
						: <div className="nothing">Nothing here yet</div>
					}
				</StyledOrderContainer>
				<ToastContainer
					position="bottom-center"
					bodyClassName="toast"
					autoClose={3000}
					closeButton={false}
				/>
			</MainContainer>
		);
	}

	return (
		<Spinner />
	);
}

export default connect((state) => state)(SchoolSelling);
