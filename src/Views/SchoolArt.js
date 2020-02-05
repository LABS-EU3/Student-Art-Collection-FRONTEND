import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

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
import { StyledBox } from '../Components/BrowseComponents/BrowseCardStyling';

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
  }
  return (
    <>
      <SchoolPageHero />
      <StyledContainer>
        <div className="grid-row">
          {artSelectedSchool === 'No Art for this school at the moment' ? (
            <StyledBox>
              <h2>Sorry, this school has no art</h2>
            </StyledBox>
          ) : (
            artSelectedSchool.map(art => {
              return <SchoolArtCard art={art} key={art._id} />;
            })
          )}
        </div>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default withRouter(connect(state => state, actionCreators)(SchoolArt));
