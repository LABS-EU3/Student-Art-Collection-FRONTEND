import React from 'react';
import { StyledMessagePreview } from './MessagingComponentStyles';

function MessagePreview(props) {
    return (
        <StyledMessagePreview style={props.read ? null : {backgroundColor: 'rgba(34, 56, 76, 0.03)'}}>
            <h2>{props.name}</h2>
            <h3>{props.subject}</h3>
            <h3>{props.sentAt}</h3>
            <button>Delete</button>
        </StyledMessagePreview>
    )
}

export default MessagePreview;