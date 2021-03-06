import styled from 'styled-components';

export const StyledBrowseNav = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;

 .container {
     width: 85%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;

     button, select {
         width: 220px;
         height: 57px;
         border: none;
         background-color: ${props => props.theme.veryLightGrey};
         font-size: 1.5rem;
         text-align: left;
         margin: 0px 10px;
         opacity: 1;
         transition: opacity 0.3s ease-in-out
         cursor: pointer;
         border-radius: 5px;

         @media(max-width:500px) {
             width:150px;
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
 }
`