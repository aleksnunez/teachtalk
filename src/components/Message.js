import React from 'react'

import { MessageContainer, MessageInfo } from './message.style'

const Message = ({ message, timestamp, user, userImage }) => {
    console.log(userImage);
  return (
    <MessageContainer>
        <img 
        src="https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="teacher writing on chalkboard" />
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

