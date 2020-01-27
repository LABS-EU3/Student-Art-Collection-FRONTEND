import styled from 'styled-components';
export const StyledModal = styled.div`
.close {
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.lightGrey};  
position: fixed;
z-index: 99;
display: none

.modal {
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: ${props => props.theme.white};
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media(max-width:700px) {
    width: 95vw;
    height: 95vh;
    flex-direction: column;
    align-items: center;
  }

    .left-modal{
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      @media(max-width:700px) {
        width: 100vw;
        height: 50%;
      }

      .cont {
        width: 80%;
        height: auto;

        @media(max-width:700px) {
          width: 60%;
          margin-top: 20px;
        }
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

      @media(max-width:700px) {
        width: 100vw;
        justify-content: center;
      }

      .cont {
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      h1 {
        width: 80%;
        font-size: 4.5rem;
        margin-bottom: 0.6rem;

        @media(max-width:1200px) {
          font-size: 3.5rem;
          width: 90%;
        }

        @media(max-width:700px) {
       font-size: 2rem;
        }
      }

      h2 {
        font-size: 2rem;
        color: ${props => props.theme.black};

        @media(max-width:1200px) {
          font-size: 1.8rem;
        }

        @media(max-width:700px) {
          font-size: 1.4rem;
           }
      }

      h3 {
        font-size: 3.5rem;
        color: ${props => props.theme.lightGrey};
        margin-bottom: 5px;

        @media(max-width:1200px) {
          font-size: 2.5rem;
        }

        @media(max-width:700px) {
          font-size: 1.8remem;
           }
      }
      
      h4 {
        font-size: 1.4rem;
        color: ${props => props.theme.lightGrey};
      }

      h5 {
        font-size: 1.7rem;
        color: ${props => props.theme.black};
        margin-top: 1rem;
      }
       p {
         font-size: 1.3rem;
         line-height: 120%;
         margin-bottom: 20px;

         @media(max-width:1200px) {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        @media(max-width:700px) {
          font-size: 0.95rem;
           }
       }

      button {
        width: 100%;
        background-color: ${props => props.theme.buttonOrange};
        color: ${props => props.theme.white};
        border: none;
        border-radius: 5px;
        font-size: 2rem;
        padding: 0.6rem 5rem;
        cursor: pointer;

        &:focus {
          outline: none;
          border: none
        }
        &:hover {
          opacity: 0.7;
          transition: opacity 0.1s ease-in-out;
        }
        }

        &:focus {
          outline: none;
          border: none
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

export const StyledSuccessfulModal = styled.div`
width: 80vw;
  height: 80vh;
  display: flex;
  background-color: ${props => props.theme.white};
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  .img-cont {
    width: 40%;
    margin-top: 2rem;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  h1 {
    font-size: 4rem;
    max-width: 80%;
  }

  p {
    width: 60%;
    font-size: 1.6rem;
    margin: 2rem 0 10rem 0;
    line-height: 2rem;
    text-align: center;

     span {
       color: red;
     }
  }

  @media(max-width:700px) {
    width: 95vw;
    height: 95vh;
    flex-direction: column;
    align-items: center;
  }
`
