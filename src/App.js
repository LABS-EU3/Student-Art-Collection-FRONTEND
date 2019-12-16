import React from 'react';
import './App.css';
import LandingPage from './Views/LandingPage';
import { Route } from 'react-router-dom';

// IMPORT COMPONENTS

import Login from './Views/Login';
// private route component ready to be used for components that need to be displayed only to users logged in
// import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <>
      <LandingPage />
      <Route path="/auth/login" component={Login} />
    </>
  );
}

export default App;
