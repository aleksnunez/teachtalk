import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase';

const SidebarList = ({ Icon, title, addChannelButton }) => {
    const addChannel = () => {
        const channelName = prompt('give your channel a name: ');
        if(channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    }

    const selectChannel = () => {
        
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
                    {title}
                </SidebarListChannel>
            )}
        </SidebarListContainer>

    )
}

export default SidebarList


const SidebarListContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: small;
    cursor: pointer;
    :hover {
        opacity: 0.7;
        background-color: #e88873;
    }

`;

const SidebarListChannel = styled.div`

`;
