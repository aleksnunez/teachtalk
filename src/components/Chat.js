import { InfoOutlined, School } from '@material-ui/icons';
import React from 'react';
import { ChatContainer, Header, HeaderLeft, HeaderRight } from './chat.style';
import { useSelector } from 'react-redux';
import { selectRoomId } from '/Users/alexandernunez/Development/teachtalk/src/features/counter/counterSlice.js'
import ChatInput from './ChatInput';

const Chat = () => {
  const roomId = useSelector(selectRoomId);
  return  (
        <ChatContainer>
          <>
            <Header >
              <HeaderLeft>
                <h4><strong>#Room-name</strong></h4>
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

            {/* <ChatMessages>

            </ChatMessages> */}
            <ChatInput 
              //channelName
              channelId={roomId}
            />
            </>
        </ChatContainer>
)
};

export default Chat;

