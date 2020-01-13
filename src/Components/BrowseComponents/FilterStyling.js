import styled from 'styled-components';

export const StyledHero = styled.div`
width: 100%;
height: 0px;
overflow: hidden;
background-color: dodgerblue;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
font-family: 'Roboto', sans-serif;
transition: height 0.2s ease-in-out;

    h1 {
        font-size: 5rem;
        font-weight: 550;
        letter-spacing: 0.2rem;
    }
`

export const openBarStyling = {
    "height": "200px",
}
