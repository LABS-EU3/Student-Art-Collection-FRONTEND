import styled from 'styled-components';

export const StyledHero = styled.div`
width: 100%;
height: 0px;
overflow: hidden;
background-color: #fafafa;
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
        background-color: rgba(0,0,0,0.04);
        font-color: rgba(10,0,0,0.7);
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
            transition: opacity 0.3s ease-in-out
        }

        &:focus {
            outline: none;
            border: none;
        }
    }
    input {
        width: 320px;
        height: 57px;
        border: 1px solid rgba(0, 0, 71, 0.3);
        background-color: white;;
        font-color: rgba(10,0,0,0.7);
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
            border: 1px solid rgba(0, 0, 71, 0.05   );
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
        background-color: #ff6347;
        color: white;
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
