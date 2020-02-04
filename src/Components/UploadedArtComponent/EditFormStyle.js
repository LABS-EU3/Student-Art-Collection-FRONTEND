import styled from "styled-components";
import { Form, ErrorMessage, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .errors {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 1rem;
    margin-bottom: 0.4rem;
    div {
      margin-right: 2rem;
    }
  }
  h1 {
    font-size: 1.3rem;
    text-align: center;
    margin: 0.5rem;
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

export const StyledInput = styled(Field)`
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  background-color: rgba(238, 243, 248, 0.5);
  border: 1px solid rgba(238, 243, 248, 0.5);
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    width: 10%;
    text-align: center;
  }
  input {
    width: 89%;
  }
`;


export const Button = styled.button`
  margin: 6px auto;
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;

  .fieldName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 49%;

    @media (max-width: 600px){
      width: 100%;
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 0.8rem;
      width: 12%;
      text-align: center;
      @media(max-width: 950px){
        width: 23%;
      }
    }
    input {
      width: 87%;
      @media(max-width: 950px){
        width: 75%;
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
`;

