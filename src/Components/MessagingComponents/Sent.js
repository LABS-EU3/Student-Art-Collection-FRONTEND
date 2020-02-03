import React, { useEffect } from "react";
import { connect } from "react-redux";
import {firebase} from "../../config/firebaseConfig";
import * as actionCreators from "../../store/Actions/actionCreators";
import MessagePreview from "./MessagePreview";

const db = firebase.firestore();

function Sent(props) {
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await db
          .collection("messages")
          .where("sender_id", "==", props.loggedInUser._id)
          .get();

        const messages = snapshot.docs.map(x =>
          Object.assign({ id: x.id }, x.data())
        );

        props.retrieveSentMessages(messages);
      } catch (error) {
        props.retrieveSentMessages([]);
      }
    };
    fetchMessages();
  }, [props.history.location]);
  return (
    <>
      {props.messages.sent.length ? (
        props.messages.sent.map(message => {
          return (
            <MessagePreview
              name={message.name}
              subject={message.subject}
              sentAt={message.sentAt}
              read={message.read}
              key={message.id}
              id={message.id}
              type="sent"
            />
          );
        })
      ) : (
        <div className="nothing">Nothing here yet!</div>
      )}
    </>
  );
}

export default connect(state => state, actionCreators)(Sent);
