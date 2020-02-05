import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  .grid-row {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledEmptyContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 160px;
    height: 45px;
    margin: 0 40px;
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

    &:focus {
      outline: none;
      border: none;
    }
  }
`;
