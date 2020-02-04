import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

// COMPONENTS
import SchoolArtCard from '../Components/SchoolComponents/SchoolArtCard';
import SchoolPageHero from '../Components/SchoolComponents/SchoolPageHero';

// HELPERS
import { axiosWithBase } from '../AxiosCustom';

// STYLING
import { StyledContainer } from '../Components/BrowseComponents/BrowseArtContainerStyling';

const SchoolArt = ({ artSelectedSchool, setArtSelectedSchool, match }) => {
  const { id } = match.params;
  useEffect(() => {
    axiosWithBase()
      .get(`/art/school/art/${id}`)
      .then(res => {
        setArtSelectedSchool(res.data);
      })
      .catch(error => {
        debugger;
      });
  }, []);
  if (!artSelectedSchool || artSelectedSchool.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <SchoolPageHero />
        <StyledContainer>
          <div className="grid-row">
            {artSelectedSchool === 'No Art for this school at the moment' ? (
              <div>Sorry, this school has no art</div>
            ) : (
              artSelectedSchool.map(art => {
                return <SchoolArtCard art={art} key={art._id} />;
              })
            )}
          </div>
        </StyledContainer>
      </>
    );
  }
};

export default withRouter(connect(state => state, actionCreators)(SchoolArt));
