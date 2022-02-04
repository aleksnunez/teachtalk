import {Button}  from '@mui/material';
import React from 'react';
import { ChatInputContainer } from './chatinput.style';

const ChatInput = ({channelName, channelId}) => {

    const sendMessage = e => {
        e.preventDefault();
    }

  return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #$ROOM`}/>
            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
};

export default ChatInput;
