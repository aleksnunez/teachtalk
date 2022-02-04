import { Add, AppsRounded, 
  ExpandLessRounded, 
  FileCopyRounded, 
  FolderSpecialRounded, 
  ForumRounded, 
  InboxRounded, 
  InsertComment, 
  PeopleAltRounded } from "@material-ui/icons";

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

      <SidebarList Icon={InboxRounded} title="Inbox" />
      <SidebarList Icon={InsertComment} title="Threads" />
      <SidebarList Icon={FolderSpecialRounded} title="Saved" />
      <SidebarList Icon={ForumRounded} title="Channels" />
      <SidebarList Icon={PeopleAltRounded} title="People" />
      <SidebarList Icon={AppsRounded} title="Apps" />
      <SidebarList Icon={FileCopyRounded} title="Files" />
      <SidebarList Icon={ExpandLessRounded} title="show less" />
      <hr />
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

