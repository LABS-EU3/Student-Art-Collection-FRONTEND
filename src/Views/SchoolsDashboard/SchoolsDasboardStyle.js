import styled from 'styled-components';

export const SchoolsDashboardContainer = styled.section`
    width:90%;
	display: flex;
	justify-content: space-around;

`;

export const StyledSidebar = styled.aside`
	width: 25%;
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
        font-size: 1.5rem;
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
