import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actionCreators from '../../store/Actions/actionCreators';

const StyledDiv = styled.div`
  font-family: ‘Roboto’, sans-serif;
  padding: 2rem;
  h2 {
    font-size: 1rem;
  }
  span {
    text-decoration: underline;
  }
`;

const ResetPassword = ({ isLoading }) => {
  if (isLoading) {
    return null;
  }
  return (
    <StyledDiv>
      <h2>
        Click{' '}
        <span>
          <Link to="/resetpasswordrequest">here</Link>
        </span>{' '}
        if you forgot your password.
      </h2>
    </StyledDiv>
  );
};

export default connect(state => state, actionCreators)(ResetPassword);
