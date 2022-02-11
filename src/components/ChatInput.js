import {Button}  from '@mui/material';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';

import { ChatInputContainer } from "./chatinput.style"
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
            userImage:"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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

