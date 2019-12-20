import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div>
      <p>
        Click <Link to="/resetpasswordrequest">here</Link> if you forgot your
        password.
      </p>
    </div>
  );
};

export default ResetPassword;
