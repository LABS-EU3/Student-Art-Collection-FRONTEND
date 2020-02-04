import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import * as actionCreators from '../../store/Actions/actionCreators';
import { StyledBox } from '../BrowseComponents/BrowseCardStyling';

// HELPERS
import { axiosWithBase } from '../../AxiosCustom';

function SchoolCard(props) {
  const { school } = props;
  const fetchArtSelectedSchool = () => {
    props.history.push(`/schools/${school._id}`);
  };

  return (
    <StyledBox>
      {!school.profile_picture ? null : (
        <img src={school.profile_picture} alt={school.userLocation.name} />
      )}
      <div className="art-info">
        <h2>{school.userLocation.name}</h2>
        <h2>{school.userLocation.postcode}</h2>
        <h2>{school.userLocation.administrative}</h2>
        <h2>({school.userLocation.country})</h2>
        <h3>{`Distance to school: ${Math.round(
          (school.dist.calculated * 6371 * 100) / 100
        ).toFixed(1)} km`}</h3>
        <button onClick={fetchArtSelectedSchool}>Check out art</button>
      </div>
    </StyledBox>
  );
}

const StyledCard = styled.div`
  max-height: auto;
  flex-basis: 25%;
  -ms-flex: auto;
  width: 250px;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  border: 1px solid red img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  @media (max-width: 1073px) {
    flex-basis: 33.33%;
    height: auto;
  }

  @media (max-width: 815px) {
    flex-basis: 50%;
    height: auto;
  }
  @media (max-width: 375px) {
    flex-basis: 100%;
    height: auto;
    margin-left: 14px;
  }
  @media (max-width: 340px) {
    flex-basis: 100%;
    height: auto;
    margin-left: 0px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 550;
    margin-bottom: 0.8rem;
  }

  h3 {
    opacity: 0.5;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
  }
`;

export default withRouter(connect(state => state, actionCreators)(SchoolCard));
