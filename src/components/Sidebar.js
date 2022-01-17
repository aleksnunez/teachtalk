import { Add, AppsRounded, 
  ExpandLessRounded, 
  FileCopyRounded, 
  FolderSpecialRounded, 
  ForumRounded, 
  InboxRounded, 
  InsertComment, 
  PeopleAltRounded } from "@material-ui/icons";

import React from "react";
import { 
  SidebarContainer, 
  SidebarHeader, 
  SidebarInfo, 
  SidebarCreateIcon, 
  SidebarStatusIcon } from "./sidebar.style";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>
            teachtalk
            <SidebarCreateIcon />
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
    </SidebarContainer>
  );
};

export default Sidebar;

