import styled from 'styled-components';
export const StyledModal = styled.div`

width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.5);  
position: fixed;
z-index: 99;
display: none

.modal {
  width: 80vw;
  height: 80vh;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`;
export const openModalStyling = {
    display: 'flex'
};
