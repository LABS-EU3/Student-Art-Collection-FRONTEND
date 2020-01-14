import styled from 'styled-components';
export const StyledModal = styled.div`
.close {
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,0.4);  
position: fixed;
z-index: 99;
display: none

.modal {
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: white;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

    .left-modal{
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .cont {
        width: 440px;
        height: 440px;

        img {
          width: 100%;
          max-height: auto;
        }
      }
    }

    .right-modal {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      font-family: 'Roboto', sans-serif;

      .cont {
        width: 500px
        height: 440px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      h1 {
        width: 80%;
        font-size: 4.5rem;
        margin-bottom: 0.6rem;
      }

      h2 {
        font-size: 2rem;
        color: darkgrey;
      }

      h3 {
        font-size: 3.5rem;
        color: #4e9982;
        margin-bottom: 5px;
      }
      
      h4 {
        font-size: 1.4rem;
        color: rgba(0,0,0,0.6);
      }
       p {
         font-size: 1.3rem;
         line-height: 120%;
         margin-bottom: 20px;
       }

      button {
        width: 100%;
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 2rem;
        padding: 0.6rem 5rem;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
          transition: opacity 0.1s ease-in-out;
        }
      }
      }
    }
    }
  }
}
`;
export const openModalStyling = {
  display: 'flex'
};
