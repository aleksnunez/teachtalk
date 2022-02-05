import {Button}  from '@mui/material';
import React, { useState } from 'react';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

import { ChatInputContainer } from "./chatinput.style"

const ChatInput = ({channelName, channelId}) => {
    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();

        console.log(channelId);
        if(!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Alex',
            userImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpng&psig=AOvVaw0rWKRHfLXn0XTE50eWjirt&ust=1644100273304000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCX5_iM5_UCFQAAAAAdAAAAABAD'
        })
        setInput('');
    }

  return (
    <ChatInputContainer>
        <form>
            <input
            value={input}
            onChange={e => setInput(e.target.value)} 
            placeholder={`Message #$ROOM`}/>

            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
};

export default ChatInput;

