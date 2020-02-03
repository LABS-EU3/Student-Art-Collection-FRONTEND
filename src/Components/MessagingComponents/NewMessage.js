import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import * as actionCreators from "../../store/Actions/actionCreators";
import {firebase} from "../../config/firebaseConfig";
import pushNotification from '../../helpers/pushNotification.fcm';

import { StyledMessageBox } from "./MessagingComponentStyles";

const db = firebase.firestore();

function NewMessage(props) {
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
      receiver_id: id,
      read: false,
      subject: props.browseArtState.artInModal.name ? props.browseArtState.artInModal.name : "Message",
      name: props.loggedInUser.type === 'school' ? props.loggedInUser.name : props.loggedInUser.firstname,
      sentAt: new Date().toDateString()
    };
    db.collection("messages")
      .doc()
      .set(testSubmitObject)
      .then(async() => {
       await pushNotification(id);
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
      setMessageContent(props.browseArtState.artInModal.name)
  }, []);

  return (
    <>
      <StyledMessageBox>
        <div className="from">
          <h3>To: </h3>
          <h2>{id}</h2>
        </div>
        <div className="subject">
          <h3>Subject: </h3>
          <h2>RE: {messageContent ? messageContent : ""}</h2>
        </div>
        <div className="message">
          <textarea value={messageBody} autoFocus onChange={changeHandler} placeholder="Your message here" />
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

export default connect(state => state, actionCreators)(NewMessage);
