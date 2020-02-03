import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

// COMPONENTS
import SchoolArtCard from '../Components/SchoolComponents/SchoolArtCard';

const SchoolArt = ({ artSelectedSchool }) => {
  debugger;
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
};

export default connect(state => state, actionCreators)(SchoolArt);
