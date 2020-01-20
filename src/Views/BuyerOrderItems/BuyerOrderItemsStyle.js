import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const MainContainer = styled.section`
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

export const StyledButtonContainer = styled.div`
width: 100%;
height: 10%;
border-bottom: 1px solid rgba(0,0,0,0.1);
display: flex;
justify-content: space-evenly;
align-items: flex-end;
`;

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

export const StyledOrderContainer = styled.div`
width: 100%;
height: 90%;
overflow-y: scroll;

	.nothing{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}
`

export const CollectionItemContainer = styled.div`	
	 max-height: auto;
	-ms-flex: auto;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0,0,0,.06);
	width: 100%;
	max-width: 250px;
	margin: 2em;
	padding: 2em;
	display:inline-block;
	border: 1px solid rgba(0, 0, 0, 0.02);
	font-family: 'Roboto', sans-serif;
	transition: all 0.3s cubic-bezier(.25,.8,.25,0.5);
	&:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.05);
    };
    img {
     max-width: 100%;
     height: auto;
     margin-bottom: 1rem;
     cursor: pointer;
	};

	button {
		margin-top: 1rem;
		margin-left: 35%;
		width: 60px;
		background-color: orange;
		color: white;
		border-radius: 5px;
		outline: none;
		border: none;
		padding: .5rem;
		cursor: pointer;
		&:hover{
			color: orange;
			background: white;
		}
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

export const SellingSection = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: space-between;
	div {
		display: flex;
		justify-content: space-between;
		align-items:center;
		margin: 1rem 0;
	span{
		font-size: 1.5rem;
	}
	}
`;



