import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";



const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 430px;
    height: 55px;
    margin: 1rem 0;
    padding-left: 1rem;
    font-size: 1.5rem;
    background-color: rgba(238, 243, 248, 0.5);
    border: 1px solid ${props => props.theme.white};
    transition: all 0.3s ease-in-out;
    border-radius: 5px;

    @media(max-width: 590px) {
      width: 350px;
    }

    @media(max-width: 390px) {
      width: 290px;
    }

    :hover {
      background-color: rgba(238, 243, 248, 0.1);
      transition: all 0.3s ease-in-out;
    }

    :focus {
    border: 1px solid ${props => props.theme.lightGrey};
    outline: none;
    }
  }

  .links {
    width: 430px;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;

    @media(max-width: 590px) {
      width: 290px  ;
      padding: 0;
    }

    a {
      font-size: 1.2rem;
      color: ${props => props.theme.lightGrey};

      @media(max-width: 590px) {
        font-size: 1rem;
      }

      :hover {
        color: ${props => props.theme.black};
        text-decoration: underline;
      }
    }
  }

  button {
    width: 190px;
    margin: 4.5rem 0 1rem 0;
    background-color: ${props => props.theme.buttonOrange};
    color: ${props => props.theme.white};
    border: none;
    border-radius: 5px;
    font-size: 1.8rem;
    padding: 0.6rem 5rem;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out;
    }
    :focus {
      outline: none;
    }
  }
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 0.9rem;
  width: 410px;
`;

const LoginForm = (props) => {
  return (
    <StyledDiv>
        <StyledError name="email" component="h6" />
      <StyledForm>
        <Field
          name="email"
          type="email"
          data-testid="emailField"
          className="field"
          placeholder="Enter your email"
        />
        <StyledError name="password" component="h6" />
        <Field
          name="password"
          type="password"
          data-testid="passwordField"
          placeholder="Enter your password"
        />
        <div className="links">
          <Link to="/signup">Not yet a member?</Link>
          <Link to="/resetpasswordrequest">Forgotten password?</Link>
        </div>
        <button type="submit">Log in</button>
      </StyledForm>
    </StyledDiv>
  );
};

export default connect(state => state, actionCreators)(LoginForm);
