import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const MainContainer = styled.section`
	box-sizing: border-box;
	width: 90%;
	padding: 1rem;
`;

export const SchoolsCollectionContainer = styled.section`
	display: grid;
	overflow-y: scroll;
	padding: 1 rem;
	grid-gap: 5%;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	grid-auto-rows: 300px;

	.not-sold {
		font-size: 17px;
	}
`;

export const CollectionItemContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	height: auto;
	padding: 1rem;
	margin-bottom: 1.5rem;
	font-family: 'Roboto';
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.02);
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
	.order-img {
		display: flex;
	}
	.order-section {
		display:flex;
		flex-direction: column;
		align-items: flex-start;
		margin: .5rem 0;
		p {
			padding: 2.5 rem;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: normal;
			font-size: 15px;
			line-height: 1.5rem;
		}
		p:nth-child(4) {
		color: green;
	}
	}
	img {
		/* object-fit: cover; */
		width: 100%;
	}
`;

export const CustomButton = styled(NavLink)`
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
	width: 80%;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	margin-bottom: 3rem;
	position: absolute;
	bottom: 60%;

	font-size: 17px;
	hr {
		width: 85%;
		border: 0;
		height: 1px;
		margin-bottom: 2rem;
		background: #333;
		background-image: linear-gradient(to right, #ccc, #333, #cccccc);
	}
`;

export const MainButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	position: relative;
	margin-bottom: 5rem;
`;

export const CustomButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;
