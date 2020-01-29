import styled from "styled-components";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";

function Search(props) {
  const [inputs, setInputs] = useState({ search: "", type: "name" });

  const changeHandler = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = () => {
    props.setSearchValues(inputs);
  };

  const reset = () => {
    props.setSearchValues({ search: "", type: "name" });
  };

  return (
      <StyledFilter>
        <input
          type="text"
          name="search"
          onChange={changeHandler}
          value={inputs.search}
          placeholder="Search..."
        />
        <select value={inputs.type} name="type" onChange={changeHandler}>
          <option value="name">School Name</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
          <option value="medium">Medium</option>
          <option value="description">Description</option>
          <option value="style">Style</option>
        </select>
        <button onClick={submit}>Search</button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </StyledFilter>
  );
}

export default connect(state => state, actionCreators)(Search);

const StyledFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    // border: 1px solid red;
    width: 100%;
    height: 60px;
    padding: 10px;
    
    background-color: ${props => props.theme.veryLightGrey};
    color: white;
    font-family: 'Roboto', sans-serif;

    @media(min-width: 1000px) {
      justify-content: center;
    }

    @media(max-width:500px) {
      flex-direction: column;
      justify-content: space-between;
      height: 200px;
    }

    
    input {
        width: 30%;
        height: 100%;
        max-width: 320px;
        border: 1px solid ${props => props.theme.white};
        background-color: ${props => props.theme.white};
        font-color: ${props => props.theme.black};
        font-size: 1.5rem;
        padding-left: 10px;
        border: 1px solid red;
        border-radius: 5px;
        transition: opacity 0.3s ease-in-out

        @media(min-width: 1000px) {
          margin: 0 10px;
        }

        @media(max-width:500px) {
            width: 90%;
            height: 40px;
        }

        &:hover {
            opacity: 0.7;
            border: 1px solid ${props => props.theme.buttonOrange};
            transition: opacity 0.3s ease-in-out;
            transition: border 0.2s ease-in-out;
        }

        &:focus {
            outline: none;
            border: none;
        }
    }

    select {
        width: 25%;
        height: 100%;
        max-width: 320px;
        // max-width: 250px;
        border: none;
        background-color: ${props => props.theme.white};
        border: 1px solid ${props => props.theme.white};
        font-color: ${props => props.theme.black};
        font-size: 1.5rem;
        text-align: left;
        opacity: 1;
        transition: opacity 0.3s ease-in-out
        cursor: pointer;
        border: 1px solid red;
        border-radius: 5px;

        @media(min-width: 1000px) {
          margin: 0 10px;
        }

        @media(max-width:500px) {
          width: 90%;
          height: 40px;
        }

        &:hover {
            opacity: 0.7;
            transition: border 0.2s ease-in-out;
            transition: opacity 0.3s ease-in-out;
            border: 1px solid ${props => props.theme.buttonOrange};
        }

        &:focus {
            outline: none;
            border: none;
        }
    }

    button {
        width: 20%;
        max-width: 200px;
        height: 100%;
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

        @media(min-width: 1000px) {
          margin: 0 10px;
        }

        @media(max-width:500px) {
          width: 90%;
          height: 40px;
      }
    
        &:focus {
            outline: none;
            border: none;
        }

        // &#reset {
        //     width:100px;
        //     margin: 0;
        // }
`;
