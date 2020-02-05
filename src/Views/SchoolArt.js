import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';
import styled from 'styled-components';

// COMPONENTS
import SchoolArtCard from '../Components/SchoolComponents/SchoolArtCard';
import SchoolPageHero from '../Components/SchoolComponents/SchoolPageHero';
import Spinner from '../Components/Spinner';
import Footer from '../Components/LandingComponents/Footer';

// HELPERS
import { axiosWithBase } from '../AxiosCustom';

// STYLING
import {
  StyledContainer,
  StyledEmptyContainer
} from '../Components/BrowseComponents/BrowseArtContainerStyling';

const SchoolArt = ({ artSelectedSchool, setArtSelectedSchool, match }) => {
  const [spinning, setSpinning] = useState(true);
  const { id } = match.params;
  useEffect(() => {
    axiosWithBase()
      .get(`/art/school/art/${id}`)
      .then(res => {
        setArtSelectedSchool(res.data);
        setSpinning(false);
      })
      .catch(error => {
        setSpinning(false);
      });
  }, []);

  if (spinning) {
    return (
      <StyledEmptyContainer>
        <Spinner />
      </StyledEmptyContainer>
    );
  } else if (artSelectedSchool === 'No Art for this school at the moment') {
    return (
      <>
        <SchoolPageHero />
        <StyledEmptyContainer>
          <h1>Sorry, this school has no art</h1>
        </StyledEmptyContainer>
        <Footer />
      </>
    );
  }
  return (
    <>
      <SchoolPageHero />
      <StyledContainer>
        <div className="grid-row">
          {artSelectedSchool.map(art => {
            return <SchoolArtCard art={art} key={art._id} />;
          })}
        </div>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default withRouter(connect(state => state, actionCreators)(SchoolArt));
