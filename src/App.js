import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// global style
import GlobalStyle from "./Styles/GlobalStyle";
// import theme
import theme from "./Styles/Theme";
// import ResetPasswordForm from './Components/resetPassword/ResetPasswordForm';

import "./App.css";
import Spinner from "./Components/Spinner";
import ErrorBoundary from "./Components/error-boundary/error-boundary.component";
import StripePayment from './Views/StripePage/Payment';
  
const Navbar = lazy(() => import("./Components/NavBar"));
const LandingPage = lazy(() => import("./Views/LandingPage"));
const Register = lazy(() => import("./Views/Register"));
const ConfirmationSent = lazy(() => import("./Views/ConfirmationSent"));
const ConfirmationSuccess = lazy(() => import("./Views/PasswordResetSent"));
const PasswordResetSent = lazy(() => import("./Views/PasswordResetSent"));
const ResetPasswordForm = lazy(() =>
  import("./Components/resetPassword/ResetPasswordForm")
);
const Login = lazy(() => import("./Views/Login"));
const Dashboard = lazy(() => import("./Views/Dashboard"));
const ContactPage = lazy(() => import("./Views/Contact"));
const BrowseArt = lazy(() => import("./Views/BrowseArt"));
const ArtViewModal = lazy(() => import("./Views/ArtViewModal"));
const PasswordReset = lazy(() =>
  import("./Components/resetPassword/PasswordReset")
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/browse" component={ArtViewModal} />
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/browse" component={BrowseArt} />
            <Route path="/myaccount" component={Dashboard} />

            <Route path="/selling" component={Dashboard} />
            <Route path="/resetpassword" component={PasswordReset} />
            <Route path="/resetpasswordrequest" component={ResetPasswordForm} />
            <Route path="/resetpasswordsent" component={PasswordResetSent} />

            <Route path="/confirmation" component={ConfirmationSent} />
            <Route path="/success" component={ConfirmationSuccess} />
            <Route path="/contact" component={ContactPage} />
    
            <Route path="/payment" component={StripePayment} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
