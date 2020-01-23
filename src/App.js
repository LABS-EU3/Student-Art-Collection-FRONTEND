import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import * as actionCreators from "./store/Actions/actionCreators";
import "./App.css";
import Navbar from "./Components/NavBar";
import LandingPage from "./Views/LandingPage";
import Register from "./Views/Register";
import ConfirmationSent from "./Views/ConfirmationSent";
import ConfirmationSuccess from "./Views/ConfirmationSuccess";
import PasswordResetSent from "./Views/PasswordResetSent";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import PasswordReset from "./Components/resetPassword/PasswordReset";
import ContactPage from "./Views/Contact";
import BrowseArt from "./Views/BrowseArt";
import ArtViewModal from "./Views/ArtViewModal";
import firebase from "./config/firebaseConfig";

// global style
import GlobalStyle from "./Styles/GlobalStyle";
// import theme
import theme from "./Styles/Theme";
import ResetPasswordForm from "./Components/resetPassword/ResetPasswordForm";

const db = firebase.firestore();

function App(props) {

  useEffect(() => {
    if (props.loggedInUser._id) {
      const fetchMessages = async () => {
        try {
          const snapshot = await db
            .collection("messages")
            .where("receiver_id", "==", props.loggedInUser._id)
            .get();

          const messages = snapshot.docs.map(x =>
            Object.assign({ id: x.id }, x.data(), {
              sendAt: x.data().sendAt.toDate()
            })
          );

          props.retrieveInboxMessages(messages);
        } catch (error) {
          props.retrieveInboxMessages([]);
        }
      };
      fetchMessages();
    } 
  }, [props.history.location  ]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/browse" component={ArtViewModal} />
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/resetpasswordrequest" component={ResetPasswordForm} />
      <Route path="/confirmation" component={ConfirmationSent} />
      <Route path="/success" component={ConfirmationSuccess} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
      <Route path="/myaccount" component={Dashboard} />
      <Route path="/selling" component={Dashboard} />
      <Route path="/resetpasswordsent" component={PasswordResetSent} />
      <Route path="/resetpassword" component={PasswordReset} />
      <Route path="/browse" component={BrowseArt} />
    </ThemeProvider>
  );
}

export default withRouter(connect(state => state, actionCreators)(App));
