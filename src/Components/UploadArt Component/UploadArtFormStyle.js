import styled from 'styled-components'
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  padding: 0.5rem 0;
  font-size: 1rem;
`;

export const StyledName = styled.input`
  width: 450px;
  height: 50px;
  padding: 20px;
  border-radius: 3px;
`;

export const StyledDesc = styled.input`
  width: 100%;
  margin-bottom: 20px;
  height: 60px;
  padding: 20px;
  border-radius: 3px;
`;

export const StyledDimension = styled.input`
  width: 250px;
  height: 40px;
  padding: 20px;
  border-radius: 3px;
`;

export const StyledDetails = styled.input`
  width: 450px;
  margin-bottom: 20px;
  height: 50px;
  padding: 20px;
  border-radius: 3px;
`;

export const Button = styled.button`
  margin: 10px auto;
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
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
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
`;

