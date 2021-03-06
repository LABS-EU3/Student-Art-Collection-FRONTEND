import styled from "styled-components";
import { Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    border-radius: 5px;
    border: solid 0.5px ${props => props.theme.lightGrey};
    font-size: 1.4rem;
    transition: background-color 0.2s ease-in-out;
    margin-bottom: 20px;

    :hover {
      background-color: ${props => props.theme.veryLightGrey};
      transition: background-color 0.2s ease-in-out;
    }
    :focus {
      background-color: ${props => props.theme.veryLightGrey};
      outline: none;
    }
  }
  button {
    margin: 40px auto;
    background-color: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
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
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;
