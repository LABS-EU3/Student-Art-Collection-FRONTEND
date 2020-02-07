import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import * as actionCreators from "./store/Actions/actionCreators";
import "./App.css";
import {firebase, messaging} from "./config/firebaseConfig";
import messagingHelper from './config/messagingHelper';
// global style
import GlobalStyle from './Styles/GlobalStyle';
// import theme
import theme from './Styles/Theme';

import './App.css';
import AppSpinner from './Components/AppSpinner';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';
import StripePayment from './Views/StripePage/Payment';
import ErrorPage from './Views/ErrorPage';
import PrivateRoute from './Components/PrivateRoute';

const Navbar = lazy(() => import('./Components/NavBar'));
const LandingPage = lazy(() => import('./Views/LandingPage'));
const AboutPage = lazy(() => import('./Views/About'));
const Register = lazy(() => import('./Views/Register'));
const ConfirmationSent = lazy(() => import('./Views/ConfirmationSent'));
const ConfirmationSuccess = lazy(() => import('./Views/ConfirmationSuccess'));
const PasswordResetSent = lazy(() => import('./Views/PasswordResetSent'));
const ResetPasswordForm = lazy(() =>
  import('./Components/resetPassword/ResetPasswordForm')
);
const Login = lazy(() => import('./Views/Login'));
const Dashboard = lazy(() => import('./Views/Dashboard'));
const ContactPage = lazy(() => import('./Views/Contact'));
const BrowseArt = lazy(() => import('./Views/BrowseArt'));
const Schools = lazy(() => import('./Views/Schools'));
const ArtViewModal = lazy(() => import('./Views/ArtViewModal'));
const ArtSchoolPageViewModal = lazy(() =>
  import('./Views/ArtSchoolPageViewModal')
);
const PasswordReset = lazy(() =>
  import('./Components/resetPassword/PasswordReset')
);
const SchoolArt = lazy(() => import('./Views/SchoolArt'));

const db = firebase.firestore();

function App(props) {
  const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if(!iOS) {
    messaging.onMessage(()=>{
      alert('you have a new message')
    })
  }
  // navigator.serviceWorker.addEventListener("message", () => {
  //   toast.info('you have a new message')
  // });
  useEffect(() => {
    if (props.loggedInUser._id) {
      messagingHelper(props);
      const fetchMessages = async () => {
        try {
          const snapshot = await db
            .collection('messages')
            .where('receiver_id', '==', props.loggedInUser._id)
            .get();

          const messages = snapshot.docs.map(x =>
            Object.assign({ id: x.id }, x.data())
          );

          props.retrieveInboxMessages(messages);

          const notifications = props.messages.received.filter(x => {
            return !x.read;
          });

          props.setNotifications(notifications.length);
          document.title = notifications.length
            ? `artFunder - ${notifications.length} - `
            : 'artFunder';
        } catch (error) {
          props.retrieveInboxMessages([]);
          props.setNotifications(0);
        }
      };
      fetchMessages();
    }
  }, [props.history.location, props.loggedInUser._id]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<AppSpinner />}>
            <Route path="/browse" component={ArtViewModal} />
            <Route path="/browseartschool" component={ArtSchoolPageViewModal} />
            <Route path="/" component={Navbar} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/signup" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/browse" component={BrowseArt} />
            <Route exact path="/schools" component={Schools} />
            <Route exact path="/schools/:id" component={SchoolArt} />
            <Route path="/myaccount" component={Dashboard} />

            <PrivateRoute path="/selling" component={Dashboard} />
            <Route path="/resetpassword" component={PasswordReset} />
            <Route path="/resetpasswordrequest" component={ResetPasswordForm} />
            <Route path="/resetpasswordsent" component={PasswordResetSent} />

            <Route path="/confirmation" component={ConfirmationSent} />
            <Route path="/success" component={ConfirmationSuccess} />
            <Route path="/contact" component={ContactPage} />

            <Route path="/payment" component={StripePayment} />
            <Route exact path="/404" component={ErrorPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Redirect to="/404" />
    </ThemeProvider>
  );
}

export default withRouter(connect(state => state, actionCreators)(App));
