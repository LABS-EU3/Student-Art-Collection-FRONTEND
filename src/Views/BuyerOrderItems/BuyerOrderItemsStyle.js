import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.section`
	box-sizing: border-box;
	width: 85%;
	padding: 1rem;
`;

export const BuyerItemsContainer = styled.section`
	display: grid;
	overflow-y: scroll;
	padding: 1 rem;
	grid-gap: 5%;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-auto-rows: 220px;
	.not-sold {
		font-size: 17px;
	}
`;

export const CollectionItemContainer = styled(NavLink)`
	width: 70%;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1rem;
	margin-bottom: 1.5rem;
	font-family: 'Roboto';
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.02);
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
	.order-img {
		display: flex;
		justify-content: center;
	}
	img {
		object-fit: cover;
		width: 180px;
		display: flex;
		justify-content: center;
	}
	span {
		padding: 2.5 rem;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 1.5rem;
	}
	span:nth-child(5) {
		color: green;
	}
`;

export const CustomButton2 = styled.a`
	background: white;
	padding: 5px 15px;
	font-size: 10pt;
	font-family: 'Roboto';
	margin-left: 0.5rem;
	cursor: pointer;
	&:hover {
		${'' /* color: #333333;
		background: #f7f7f7; */};
	}
	&:active {
		box-shadow: inset 1px 1px 1px #dfdfdf;
	}
`;

export const ButtonsContainer = styled.div`
	padding: 1 rem;
	width: 88%;
	display: flex;
	flex-direction: column;
	padding-bottom: 1rem;
	font-size: 17px;

	hr {
		width: 700px;
		border: 0;
		height: 1px;
		background: #333;
		background-image: linear-gradient(to right, #ccc, #333, #cccccc);
	}
`;

export const MainButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	padding-bottom: 1rem;
`;

export const CustomButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;
