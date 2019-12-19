import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/Actions/actionCreators';

const LoginError = ({logInError}) => {
    if (!logInError) {
        return null
    }
return <div>{logInError.errorMessage}</div>;
};

export default connect(state => state, actionCreators)(LoginError);
