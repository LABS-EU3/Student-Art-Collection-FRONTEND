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

a {
	text-align: center;
	width: 15%;
	transition: color 0.2s ease-in-out;
	border-bottom: 1px solid white;
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

.active {
	color: rgba(0,0,0,1);
	border-bottom: 1px solid black;
}
`

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

export const CustomButton2 = styled(NavLink)`
	background: white;
	padding: 5px 15px;
	font-size: 10pt;
	font-family: 'Roboto';
	margin-left: 0.5rem;
	cursor: pointer;
	&:hover {
		color: orange;
	}
	&:active {
		box-shadow: inset 1px 1px 1px #dfdfdf;
	}
`;

export const ButtonsContainer = styled.div`
	width: 63%;
	display: flex;
	flex-direction: column;
	align-content: center;
	margin-bottom: 3rem;
	position: absolute;
	top: 17%;
	border-bottom: 1px solid gray;
	font-size: 17px;
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
	align-content: center;
	padding: .5rem;
`;



// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const MainContainer = styled.section`
// 	box-sizing: border-box;
// 	width: 85%;
// 	padding: 1rem;
// `;

// export const BuyerItemsContainer = styled.section`
// 	display: grid;
// 	overflow-y: scroll;
// 	padding: 1 rem;
// 	grid-gap: 5%;
// 	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
// 	grid-auto-rows: 220px;
// 	.not-sold {
// 		font-size: 17px;
// 	}
// `;

// export const CollectionItemContainer = styled.a`
// 	width: 70%;
// 	display: flex;
// 	flex-direction: column;
// 	height: 100%;
// 	padding: 1rem;
// 	margin-bottom: 1.5rem;
// 	font-family: 'Roboto';
// 	background: #ffffff;
// 	border: 1px solid rgba(0, 0, 0, 0.02);
// 	box-sizing: border-box;
// 	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
// 	.order-img {
// 		display: flex;
// 		justify-content: center;
// 	}
// 	img {
// 		object-fit: cover;
// 		width: 180px;
// 		display: flex;
// 		justify-content: center;
// 	}
// 	span {
// 		padding: 2.5 rem;
// 		font-family: 'Roboto';
// 		font-style: normal;
// 		font-weight: normal;
// 		font-size: 11px;
// 		line-height: 1.5rem;
// 	}
// 	span:nth-child(5) {
// 		color: green;
// 	}
// `;

// export const CustomButton2 = styled(NavLink)`
// 	background: white;
// 	padding: 5px 15px;
// 	font-size: 10pt;
// 	font-family: 'Roboto';
// 	margin-left: 0.5rem;
// 	cursor: pointer;
// 	&:hover {
// 		${'' /* color: #333333;
// 		background: #f7f7f7; */};
// 	}
// 	&:active {
// 		box-shadow: inset 1px 1px 1px #dfdfdf;
// 	}
// `;

// export const ButtonsContainer = styled.div`
// 	padding: 1 rem;
// 	width: 80%;
// 	display: flex;
// 	flex-direction: column;
// 	padding-bottom: 1rem;
// 	font-size: 17px;
// 	position: absolute;
// 	bottom: 80%;
// 	margin-bottom: 3.5rem;

// 	hr {
// 		width: 85%;
// 		border: 0;
// 		height: 1px;
// 		background: #333;
// 		background-image: linear-gradient(to right, #ccc, #333, #cccccc);
// 	}
// `;

// export const MainButtonsContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-content: flex-start;
// 	margin-bottom: 5rem;
// 	position: relative;
// `;

// export const CustomButtonWrapper = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// `;
