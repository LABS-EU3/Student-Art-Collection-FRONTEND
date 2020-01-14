import styled from 'styled-components'
import { Form, ErrorMessage } from 'formik';

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
    border: solid 0.5px lightgrey;
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
  button {
    margin: 40px auto;
    background-color: orange;
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
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;