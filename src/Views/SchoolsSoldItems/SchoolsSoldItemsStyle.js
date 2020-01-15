import styled from 'styled-components';

export const MainContainer = styled.section`
	box-sizing: border-box;
	width: 80%;
	padding: 1rem;
	margin: 0 auto;
`;

export const SchoolsCollectionContainer = styled.section`
	margin-top: 10rem;
	display: grid;
	padding: 1 rem;
	grid-gap: 5%;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 175px;
`;

export const CollectionItemContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1rem;
	background: #ffffff;
	border: 1px solid rgba(0, 0, 0, 0.02);
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);

	img {
		object-fit: fill;
		width: 150px;
	}


   span {
	   padding: 2 rem;
   }

`;
