import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const MainContainer = styled.section`
	box-sizing: border-box;
	width: 90%;
	padding: 1rem;
`;

export const SchoolsCollectionContainer = styled.section`
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	.not-sold {
		font-size: 17px;
	}
`;

export const CollectionItemContainer = styled.div`	
	 max-height: auto;
	-ms-flex: auto;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0,0,0,.1);
	width: 100%;
	max-width: 250px;
	margin: 2em;
	padding: 2em;
	border-radius: 10px;
	display:inline-block;
	border: 1px solid rgba(0, 0, 0, 0.02);
	font-family: 'Roboto', sans-serif;
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	&:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    };
    img {
     max-width: 100%;
     height: auto;
     margin-bottom: 1rem;
     cursor: pointer;
}

  @media(max-width: 1073px) {
      flex-basis: 33.33%;
      height: auto;
  }

  @media(max-width: 815px) {
      flex-basis: 50%;
      height: auto;

  }
  @media(max-width: 375px) {
      flex-basis: 100%;
      height: auto;
      margin-left: 14px;
  }
  @media(max-width: 340px) {
    flex-basis: 100%;
    height: auto;
    margin-left: 0px;

}

h3 {
    opacity: 0.5;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
}
h3:nth-child(4) {
		color: green;
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

