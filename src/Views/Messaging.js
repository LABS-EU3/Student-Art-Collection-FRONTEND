import React, { useState, useEffect } from "react";
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
import Spinner from "../Components/Spinner";

const db = firebase.firestore();

function Messaging(props) {
  const [messages, setMessages] = useState([]);
  const [spinning, setSpinning] = useState(true);
  const { status } = queryString.parse(props.location.search);
  const sendOrReceive = status === "inbox" ? "Sender" : "Recipient";

  useEffect(() => {
    setSpinning(true);
    const fetchMessages = async () => {
      const type = status === "inbox" ? "receiver_id" : "sender_id";

      try {
        const test = await db
          .collection("messages")
          .where(type, "==", props.loggedInUser._id)
          .get();

        const test2 = test.docs.map(x =>
          Object.assign({ id: x.id }, x.data(), {
            sendAt: x.data().sendAt.toDate()
          })
        );

        setMessages(test2);
        setSpinning(false);
      } catch (error) {
        setMessages([]);
        setSpinning(false);
      }
    };
    fetchMessages();
  }, [status]);

  if (spinning) {
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
          <div className="nothing">
            <Spinner />{" "}
          </div>
        </StyledMessageContainer>
      </StyledContainer>
    );
  }

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
        {messages.length !== 0 ? (
          messages.map(message => {
            return (
              <MessagePreview
                name={message.sender_name}
                subject={message.subject}
                sentAt={message.sendAt.toDateString()}
                read={message.read}
                key={message.id}
              />
            );
          })
        ) : (
          <div className="nothing">Nothing here yet!</div>
        )}
      </StyledMessageContainer>
    </StyledContainer>
  );
}

export default connect(state => state, actionCreators)(Messaging);
