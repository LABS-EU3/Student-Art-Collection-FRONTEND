import styled from "styled-components";
import { Form, ErrorMessage, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .errors{
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
  input {
    font-size: 1.2rem;
    @media (max-width: 600px) {
      margin-bottom: 1rem;
    }

    :focus{
      outline: 1px solid ${props => props.theme.buttonOrange};
    }
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

export const StyledName = styled(Field)`
  width: 49%;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  background-color: rgba(238, 243, 248, 0.5);
  border: 1px solid rgba(238, 243, 248, 0.5);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledDesc = styled(Field)`
  width: 100%;
  margin-bottom: 20px;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid rgba(238, 243, 248, 0.5);
  background-color: rgba(238, 243, 248, 0.5);

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const StyledDimension = styled(Field)`
  width: 32%;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid rgba(238, 243, 248, 0.5);
  background-color: rgba(238, 243, 248, 0.5);

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 330px) {
    width: 100%;
  }
`;

export const StyledDetails = styled(Field)`
  width: 49%;
  margin-bottom: 20px;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid rgba(233, 238, 243, 1);

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 0px;
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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
`;

export const Dimensions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  margin-top: 0px;
  flex-wrap: wrap;
  }
`;
