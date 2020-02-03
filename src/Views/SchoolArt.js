import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

// COMPONENTS
import SchoolArtCard from '../Components/SchoolComponents/SchoolArtCard';

// HELPERS
import { axiosWithBase } from '../AxiosCustom';

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
      <div>
        <h1>Welcome to the school page!</h1>
        {artSelectedSchool === 'No Art for this school at the moment' ? (
          <div>Sorry, this school has no art</div>
        ) : (
          artSelectedSchool.map(art => {
            return <SchoolArtCard art={art} key={art._id} />;
          })
        )}
      </div>
    );
  }
};

export default withRouter(connect(state => state, actionCreators)(SchoolArt));
