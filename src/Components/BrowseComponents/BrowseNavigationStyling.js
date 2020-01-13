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
     font-family: 'Roboto', sans-serif;

     button, select {
         width: 220px;
         height: 57px;
         border: none;
         background-color: rgba(0,0,0,0.04);
         font-color: rgba(10,0,0,0.7);
         font-size: 1.5rem;
         text-align: left;
         margin-right: 30px;
         opacity: 1;
         transition: opacity 0.3s ease-in-out
         cursor: pointer;
         border-radius: 5px;

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