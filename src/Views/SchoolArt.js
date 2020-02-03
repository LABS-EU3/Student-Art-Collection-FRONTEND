import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/Actions/actionCreators';

const SchoolArt = ({ artSelectedSchool }) => {
  return (
    <div>
      {artSelectedSchool === 'No Art for this school at the moment' ? (
        <div>Sorry, this school has no art</div>
      ) : (
        artSelectedSchool.map(art => {
          return <div>This is a piece of art</div>;
        })
      )}
    </div>
  );
};

export default connect(state => state, actionCreators)(SchoolArt);
