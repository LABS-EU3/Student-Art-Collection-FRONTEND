import styled from 'styled-components';

export const MainContainer = styled.section`
	display: flex;
	justify-content: space-around;
`;

export const SchoolsDashboardContainer = styled.section`
	margin-top: 5rem;
	padding: 3rem;
	width: 90%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const StyledSidebar = styled.aside`
	width: 30%;
	display: flex;
	flex-direction: column;
	background: white;
`;

export const StyledNavItem = styled.div`
	display: flex;
	align-items: center;

	a {
		${'' /* display: block; */} width: 100%;
		font-size: 1.5rem;
		padding: 2rem;
		padding-left: 1.4rem;
		border-bottom: 1px solid black;
		text-decoration: none;
		color: goldenrod;
		line-height: 1.2rem;
	}

	&:hover a {
		color: black;
		background: #dbf2ff;
	}
`;

export const ArrowWrapper = styled.div`
	padding: 2rem;
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	cursor: pointer;

	&:hover,
	&:focus,
	&:active {
		-webkit-transform: scale(1.2);
		transform: scale(1.2);
		-webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
		transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
	}
`;

export const NavItemsWrapper = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
	align-content: flex-start;
`;

export const MainCollectionItemContainer = styled.div``;

export const CollectionItemContainer = styled.div`
	width: 20%;
	display: flex;
	height: 35%;
	border: 1px solid black;
	margin-left: 1.5rem;

	${'' /* flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative; */} 
`;
