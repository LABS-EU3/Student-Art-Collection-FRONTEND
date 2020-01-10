import styled from 'styled-components';

export const MainContainer = styled.section`
	width: 900px;
	box-sizing: border-box;
	height: 80%;
	padding: 10px;
	margin: 0 auto;
`;

export const SchoolsDashboardContainer = styled.section`
	margin-top: 3rem;
	display: grid;
	width: 100%;
	max-width: 800px;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	${'' /* grid-template-rows: repeat(2, 100px); */} grid-auto-rows: 100px;
`;

export const CollectionItemContainer = styled.div`
	width: 40%;
	display: flex;
	height: 80%;
	border: 1px solid black;
`;
