import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";
import firebase from "../../config/firebaseConfig";

import { StyledMessageBox } from "./MessagingComponentStyles";

const db = firebase.firestore();

function Reply(props) {
  const [messageContent, setMessageContent] = useState(null);
  const [messageBody, setMessageBody] = useState("");
  const { id } = props.match.params;

  const changeHandler = e => {
    setMessageBody(e.target.value);
  };

  const submit = () => {
    const testSubmitObject = {
      message: messageBody,
      sender_id: props.loggedInUser._id,
      receiver_id: messageContent.sender_id,
      read: false,
      subject: `RE: ${messageContent.subject}`,
      name: props.loggedInUser.type === 'school' ? props.loggedInUser.name : props.loggedInUser.firstname,
      sentAt: new Date().toDateString()
    };
    db.collection("messages")
      .doc()
      .set(testSubmitObject)
      .then(() => {
        toast.success("Message sent");
        setTimeout(() => {
          props.history.push("/myaccount/messages");
        }, 2000);
      })
      .catch(() => {
        toast.error("There was an error sending your message.");
      });
  };

  useEffect(() => {
    let thisData = props.messages.received.filter(x => {
      return id == x.id;
    });
    if (thisData.length !== 0) {
      setMessageContent(thisData[0]);
    } else {
      thisData = props.messages.sent.filter(x => {
        return id == x.id;
      });
      setMessageContent(thisData[0]);
    }
  }, [props.messages.received, props.messages.sent]);

  if (!messageContent) {
    return <StyledMessageBox />;
  }
  return (
    <>
      <StyledMessageBox>
        <div className="from">
          <h3>To: </h3>
          <h2>{messageContent.name ? messageContent.name : ""}</h2>
        </div>
        <div className="subject">
          <h3>Subject: </h3>
          <h2>RE: {messageContent.subject ? messageContent.subject : ""}</h2>
        </div>
        <div className="message">
          <textarea value={messageBody} autoFocus onChange={changeHandler} />
        </div>
        <div className="buttons">
          <Link id="back" to="/myaccount/messages">
            ⬸
          </Link>
          <button onClick={submit}>Send</button>
        </div>
      </StyledMessageBox>
      <ToastContainer
        position="top-center"
        bodyClassName="toast"
        autoClose={1999}
        closeButton={false}
      />
    </>
  );
}

export default connect(state => state, actionCreators)(Reply);
