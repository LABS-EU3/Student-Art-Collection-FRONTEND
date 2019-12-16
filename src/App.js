import React from 'react';
import './App.css';
import LandingPage from './Views/LandingPage';
import { Route } from 'react-router-dom';

// IMPORT COMPONENTS

import Login from './Views/Login';

function App() {
  return (
    <>
      <LandingPage />
      <Route path="/auth/login" component={Login} />
    </>
  );
}

export default App;
