import React from "react";
import { Route, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import queryString from "query-string";

import {
  StyledContainer,
  StyledNavigationContainer,
  StyledMessageContainer
} from "./MessagingStyling";
import Inbox from "../Components/MessagingComponents/Inbox";
import Sent from "../Components/MessagingComponents/Sent";


function Messaging(props) {
  const { status } = queryString.parse(props.location.search);
  const sendOrReceive = status === "inbox" ? "Sender" : "Recipient";

  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <NavLink exact to ="/myaccount/messages">Inbox</NavLink>
        <NavLink to="/myaccount/messages/sent">Sent</NavLink>
      </StyledNavigationContainer>
      <StyledMessageContainer>
        <div className="titles">
          <h2>{sendOrReceive}</h2>
          <h2>Subject</h2>
          <h2>Date</h2>
          <h3></h3>
        </div>
        <Route exact path='/myaccount/messages' component={Inbox} />
        <Route exact path='/myaccount/messages/sent' component={Sent} />
      </StyledMessageContainer>
    </StyledContainer>
  );
}

export default connect(state => state, actionCreators)(Messaging);

