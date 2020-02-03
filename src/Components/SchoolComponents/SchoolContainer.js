import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";
import { axiosWithBase } from "../../AxiosCustom";
import styled from "styled-components";
import SchoolCard from "./SchoolCard";
import Spinner from "../Spinner";

function ArtSchoolContainer(props) {
  const [spinning, setSpinning] = useState(true);
  const [page, setPage] = useState(1);
  const [upperPageLimit, setUpperPageLimit] = useState(null);

  const changePage = direction => {
    if (direction === "plus") {
      setPage(page + 1);
    } else if (direction === "minus") {
      if (page > 1) {
        setPage(page - 1);
      }
    }
    return null;
  };

  useEffect(() => {
    axiosWithBase()
      .get('/schools/location/1234')
      .then(res => {
        debugger
        setUpperPageLimit(Math.ceil(res.data.totalCount / 12));
        console.log(res.data);
        
        props.fetchSchools(res.data);
        setSpinning(false);
      })
      .catch(() => {
        props.fetchArt([]);
        setSpinning(false);
      });
    props.toggleViewModal(false);
  }, []);

  if (spinning) {
    return (
      <StyledEmptyContainer>
        <Spinner />
      </StyledEmptyContainer>
    );
  }

  return (
    <>
      <StyledContainer>
          {props.browseSchoolState.map(school => {
            return (
              <SchoolCard
                name={school.name}
                description={school.description}
                email={school.userId.email}
                photo={school.userId.profile_picture}
              />
            );
          })}
      </StyledContainer>
      <StyledButtonContainer>
        {page === 1 ? null : (
          <button onClick={() => changePage("minus")}>Previous</button>
        )}
        {page !== upperPageLimit ? (
          <button onClick={() => changePage("plus")}>Next</button>
        ) : null}
      </StyledButtonContainer>
    </>
  );
}

export const StyledContainer = styled.div`
  max-width: 1290px;
  margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
  border: 3px solid green;
  height: 200px
`;

export const StyledEmptyContainer = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
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

export default connect(state => state, actionCreators)(ArtSchoolContainer);
