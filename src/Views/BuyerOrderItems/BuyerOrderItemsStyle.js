import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const MainContainer = styled.section`
	width: 90%;
	height: 90%;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

export const StyledButtonContainer = styled.div`
width: 100%
height: 5rem;
border-bottom: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`

export const StyledButton = styled(NavLink)`
	text-align: center;
	width: 15%;
	transition: color 0.2s ease-in-out;
	border-bottom: 1px solid white;
	padding-bottom: 0.5rem;
	font-size: 1.5rem;
	color: rgba(0,0,0,0.5);
	&:hover {
		color: rgba(0,0,0,0.8);
		transition: color 0.2s ease-in-out;
	}

	@media(max-width:480px){
		font-size: 1.1rem;
	}
}
`;

export const BuyerItemsContainer = styled.section`
	overflow-y: scroll;
	display: flex;
	position: absolute;
	top: 25%;
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


