import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './Components/NavBar';
import LandingPage from './Views/LandingPage';
import Register from './Views/Register';
import ConfirmationSent from './Views/ConfirmationSent';
import ConfirmationSuccess from './Views/ConfirmationSuccess';
import PasswordResetSent from './Views/PasswordResetSent';
import Login from './Views/Login';
import Dashboard from './Views/Dashboard'
import PasswordReset from './Components/resetPassword/PasswordReset';
import ContactPage from './Views/Contact';
// global style
import GlobalStyle from './Styles/GlobalStyle';
// import theme
import theme from './Styles/Theme';
import ResetPasswordForm from './Components/resetPassword/ResetPasswordForm';
import  UploadArt from './Views/UploadArt';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      {/* <Modal /> */}
      <Route exact path="/" component={LandingPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path="/resetpasswordrequest" component={ResetPasswordForm} />
      <Route path="/confirmation" component={ConfirmationSent} />
      <Route path="/success" component={ConfirmationSuccess} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/myaccount" component={Dashboard} />
      <Route path="/selling" component={Dashboard} />
      <Route path="/resetpasswordsent" component={PasswordResetSent} />
      <Route path="/resetpassword" component={PasswordReset} />
      
      
    </ThemeProvider>
  );
}

export default App;
