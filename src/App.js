import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './Components/NavBar';
import LandingPage from './Views/LandingPage';
import Register from './Views/Register';
import ConfirmationSent from './Views/ConfirmationSent';
import ConfirmationSuccess from './Views/ConfirmationSuccess';
import Login from './Views/Login';
import ResetPasswordPage from './Views/ResetPasswordPage';
// global style
import GlobalStyle from './Styles/GlobalStyle';
// import theme
import theme from './Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/confirmation" component={ConfirmationSent} />
      <Route path="/success" component={ConfirmationSuccess} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/resetPassword" component={ResetPasswordPage} />
    </ThemeProvider>
  );
}

export default App;
