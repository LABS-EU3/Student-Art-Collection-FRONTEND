import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/Actions/actionCreators';

const ResetPassword = ({ isLoading }) => {
  if (isLoading) {
    return null;
  }
  return (
    <div>
      <p>
        Click <Link to="/auth/resetPassword">here</Link> if you forgot your
        password.
      </p>
    </div>
  );
};

export default connect(state => state, actionCreators)(ResetPassword);
