import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/Actions/actionCreators";
import queryString from "query-string";
import firebase from "../config/firebaseConfig";

import {
  StyledContainer,
  StyledNavigationContainer,
  StyledMessageContainer
} from "./MessagingStyling";
import MessagingButton from "../Components/MessagingComponents/MessagingButtons";
import MessagePreview from "../Components/MessagingComponents/MessagePreview";

const db = firebase.firestore();

function Messaging(props) {
  const { status } = queryString.parse(props.location.search);
  const sendOrReceive = status === "inbox" ? "Sender" : "Recipient";

  return (
    <StyledContainer>
      <StyledNavigationContainer>
        <MessagingButton status="inbox">Inbox</MessagingButton>
        <MessagingButton status="sent">Sent</MessagingButton>
      </StyledNavigationContainer>
      <StyledMessageContainer>
        <div className="titles">
          <h2>{sendOrReceive}</h2>
          <h2>Subject</h2>
          <h2>Date</h2>
          <h3></h3>
        </div>
        {props.messages.received.map(message => {
          return (
            <MessagePreview
              name={message.name}
              subject={message.subject}
              sentAt={message.sendAt.toDateString()}
              read={message.read}
              key={message.id}
              id={message.id}
            />
          );
        })}
      </StyledMessageContainer>
    </StyledContainer>
  );
}

export default connect(state => state, actionCreators)(Messaging);
