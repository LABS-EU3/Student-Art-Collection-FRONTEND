import styled from 'styled-components';

export const SchoolsDashboardContainer = styled.section`
	display: flex;
	margin-top: 100px;
	height: calc(100vh - 100px);
`;

export const StyledSidebar = styled.aside`
	width: 22rem;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	background: white;
	z-index: 100;
`;

export const StyledNavItem = styled.div`
	display: flex;
	align-items: center;

	a {
		display: block;
		width: 100%;
		padding: 1rem;
		padding-left: 1.4rem;
		border-bottom: 1px solid black;
		text-decoration: none;
		color: burlywood;
		line-height: 1.4rem;
	}

	&:hover a {
		color: black;
		background: #dbf2ff;
	}
`;
