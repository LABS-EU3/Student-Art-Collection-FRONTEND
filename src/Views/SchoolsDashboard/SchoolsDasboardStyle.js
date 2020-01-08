import styled from 'styled-components';

export const SchoolsDashboardContainer = styled.section`
	margin-top: 5rem;
	padding: 2rem;
	width: 80%;
	display: flex;
	flex-direction: column;
`;

export const StyledSidebar = styled.aside`
	width: 25%;
	display: flex;
	flex-direction: column;
	background: white;
	z-index: 100;
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
