import styled from 'styled-components';

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
	grid-auto-rows: 220px;

	.not-sold {
		font-size: 17px;
	}
`;

export const CollectionItemContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1rem;
	margin-bottom: 1rem;
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
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 11px;
		line-height: 1.5rem;
	}

	span:nth-child(5) {
		color: green;
	}
`;

export const CustomButton = styled.a`
	background: white;
	padding: 5px 15px;
	font-size: 10pt;
	font-family: 'Roboto', sans-serif;
	margin-left: 0.5rem;
	cursor: pointer;

	&:hover {
		color: #333333;
		background: #f7f7f7;
	}

	&:active {
		box-shadow: inset 1px 1px 1px #dfdfdf;
	}
`;

export const ButtonsContainer = styled.div`
	padding: 2 rem;
	width: 88%;
	display: flex;
	justify-content: space-around;
	padding-bottom: 2rem;
	margin-bottom: 2rem;
	position: relative;
	font-size:17px;

	&:after {
		content: "";
		width: 600px;
		height: 2px;
		position: absolute;
		top: 45%;
		display: block;
		border-bottom: 1px solid darkgray;
	}
`;
