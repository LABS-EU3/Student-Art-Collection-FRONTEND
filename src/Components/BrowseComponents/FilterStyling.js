import styled from 'styled-components';

export const StyledHero = styled.div`
width: 100%;
height: 0px;
overflow: hidden;
background-color: ${props => props.theme.veryLightGrey};
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-family: 'Roboto', sans-serif;
transition: height 0.3s ease-in-out;

     select {
        width: 180px;
        height: 57px;
        border: none;
        background-color: ${props => props.theme.white};
        border: 1px solid ${props => props.theme.white};
        font-color: ${props => props.theme.black};
        font-size: 1.5rem;
        text-align: left;
        margin: 0px 10px;
        opacity: 1;
        transition: opacity 0.3s ease-in-out
        cursor: pointer;
        border-radius: 5px;

        @media(max-width:500px) {
            width:100px;
            height: 50px;
            font-size: 1rem;
        }

        &:hover {
            opacity: 0.7;
            transition: border 0.2s ease-in-out;
            transition: opacity 0.3s ease-in-out;
            border: 1px solid ${props => props.theme.buttonOrange};
        }

        &:focus {
            outline: none;
            border: none;
        }
    }
    input {
        width: 320px;
        height: 57px;
        border: 1px solid ${props => props.theme.white};
        background-color: ${props => props.theme.white};
        font-color: ${props => props.theme.black};
        font-size: 1.5rem;
        text-align: left;
        margin: 0px 10px;
        opacity: 1;
        padding-left: 10px;
        transition: opacity 0.3s ease-in-out
        border-radius: 5px;
        transition: border 0.2s ease-in-out;

        @media(max-width:500px) {
            width:150px;
            height: 50px;
            font-size: 1rem;
        }

        &:hover {
            opacity: 0.7;
            border: 1px solid ${props => props.theme.buttonOrange};
            transition: opacity 0.3s ease-in-out;
            transition: border 0.2s ease-in-out;
        }

        &:focus {
            outline: none;
            border: none;
        }
    }

    button {
        width: 180px;
        height: 45px;
        margin: 0 20px;
        background-color: ${props => props.theme.buttonOrange};
        color: ${props => props.theme.white};
        border: none;
        border-radius: 5px;
        font-size: 1.5rem;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
          transition: opacity 0.1s ease-in-out;
        }

        @media(max-width:500px){
            margin: 0 10px;
        }
    
        &:focus {
            outline: none;
            border: none;
        }

        &#reset {
            width:100px;
            margin: 0;
        }
`

export const openBarStyling = {
    "height": "160px",
}
