import { Add } from "@material-ui/icons";

import { 
  SidebarContainer, 
  SidebarHeader, 
  SidebarInfo, 
  SidebarStatusIcon } from "./sidebar.style";
import SidebarList from "./SidebarList";

import React from "react";
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from '../firebase';

const Sidebar = () => {
  const [channel, loading, error] = useCollection(db.collection('rooms'));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>
            teachtalk
          </h2>
          <h3>
            <SidebarStatusIcon />
            Alex
          </h3>
        </SidebarInfo>
      </SidebarHeader>


      <SidebarList Icon={Add} addChannelButton title="add channel" />

      {channel?.docs.map(doc => (
        <SidebarList 
        key={doc.id} 
        id={doc.id} 
        title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

