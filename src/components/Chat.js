import React from 'react';
import { InfoOutlined, School } from '@material-ui/icons';

import { 
  ChatContainer, 
  Header, 
  HeaderLeft, 
  HeaderRight, 
  ChatMessages } from '../styles/chat.style';
  import ChatInput from './ChatInput';

import { useSelector } from 'react-redux';
import { selectRoomId } from '/Users/alexandernunez/Development/teachtalk/src/features/counter/counterSlice.js'
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';


const Chat = () => {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

    const [roomMessages] = useCollection(
      roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
    )

  return  (
        <ChatContainer>
          <>
            <Header >
              <HeaderLeft>
                <h4><strong>#{roomDetails?.data().name}</strong></h4>
                <School style={{
                  marginLeft: "10px",
                  fontSize: "18px"
                }}/>
              </HeaderLeft>
              <HeaderRight>
                <p>
                  <InfoOutlined style={{
                    fontSize: "16px",
                    marginRight: "5px",
                    }}/> 
                    Details
                </p>
              </HeaderRight>
            </Header>
            <ChatMessages>
              {roomMessages?.docs.map(doc => {
                const {message, timestamp, user, userImage} = doc.data();
                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                  />
                )
              })}
            </ChatMessages>
            <ChatInput 
              channelName={roomDetails?.data().name}
              channelId={roomId}
            />
            </>
        </ChatContainer>
)
};

export default Chat;