import styled from 'styled-components';

export const MainContainer = styled.section`
	box-sizing: border-box;
	width: 80%;
	padding: 1rem;
	margin: 0 auto;
`;

export const SchoolsCollectionContainer = styled.section`
	margin-top: 3rem;
	display: grid;
	padding: 1 rem;
	grid-gap: 5%;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-auto-rows: 100px;
`;

export const CollectionItemContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1rem;
	border: 1px solid black;
`;
