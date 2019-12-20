import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actionCreators from '../../store/Actions/actionCreators';

const StyledDiv = styled.div`
  color: red;
  font-size: 2rem;
`;

const LoginError = ({ logInError }) => {
  if (!logInError) {
    return null;
  }
  return <StyledDiv>{logInError.errorMessage}</StyledDiv>;
};

export default connect(state => state, actionCreators)(LoginError);
