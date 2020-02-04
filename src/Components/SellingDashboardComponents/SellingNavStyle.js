import styled from "styled-components";

export const DashNavStyle = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${props => props.theme.lightGrey};

  @media (max-width: 500px) {
    width: 100%;
    font-size: 1.2rem;
  }

  div {
    height: 85%;
    width: 100%;
    border-right: 1px solid ${props => props.theme.veryLightGrey};
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }

  nav {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 500px) {
      flex-direction: row;
      height: 50px;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
    }

    a {
      width: 60%;
      padding: 0.5rem;
      text-align: center;
      transition: color 0.2s ease-in-out;
      border-bottom: 1px solid ${props => props.theme.white};

      @media (max-width: 500px) {
        width: 18%;
        padding: 0.5rem 0;
        font-size: 1.1rem;
      }

      &:hover {
        color: ${props => props.theme.modalGrey};
        transition: color 0.2s ease-in-out;
      }

      &#arrow {
        font-size: 2.5rem;
      }
    }

    button {
      width: 70%;
      border: none;
      background-color: ${props => props.theme.buttonOrange};
      color: ${props => props.theme.white};
      height: 40px;
      font-size: 1.5rem;
      margin-top: 20px;
      border-radius: 10px;
      cursor: pointer;
      outline: none;
      opacity: 1;
      transition: opacity 0.2s ease-in-out;

      @media (max-width: 500px) {
        width: 22%;
        height: 28px;
        margin-top: 0;
        font-size: 1rem;
      }

      &:hover {
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
      }
    }
  }

  .active {
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
  }
`;
