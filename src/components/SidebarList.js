import React from 'react'
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/counter/counterSlice';

import { db } from '../firebase';
import { SidebarListContainer, SidebarListChannel } from "../styles/sidebarlist.style";

const SidebarList = ({ Icon, title, addChannelButton, id }) => {
    const dispatch = useDispatch();
    
    const addChannel = () => {
        const channelName = prompt('give your channel a name: ');
        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    }

    const selectChannel = () => {
         if(id) {
             dispatch(enterRoom({
                 roomId: id
             }))

         }
    }
    return (
        <SidebarListContainer
            onClick={addChannelButton ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarListChannel>
                    <span>#</span> {title}
                </SidebarListChannel>
            )}
        </SidebarListContainer>

    )
}

export default SidebarList


