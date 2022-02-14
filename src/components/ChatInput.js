import {Button}  from '@mui/material';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';

import { ChatInputContainer } from "../styles/chatinput.style"
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({channelName, channelId}) => {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth)


    const sendMessage = e => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })
        setInput('');
    }

  return (
    <ChatInputContainer>
        <form>
            <input
            value={input}
            onChange={e => setInput(e.target.value)} 
            placeholder={`Message #${channelName}`}/>

            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
};

export default ChatInput;

