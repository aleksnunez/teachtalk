import React from 'react'

import { MessageContainer, MessageInfo } from '../styles/message.style'

const Message = ({ message, timestamp, user, userImage }) => {
    console.log(userImage);
  return (
    <MessageContainer>
        <img 
        src={userImage}
        alt="user image" />
        <MessageInfo>
            <h4>
                {user}{' '}
                <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </h4>
            <p>{message}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

