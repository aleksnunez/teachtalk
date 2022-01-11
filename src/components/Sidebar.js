import { 
  Create, 
  FiberManualRecordRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

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
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  color: #484a47;
  background-color: var(--teach-color);
  flex: 0.15;
  margin-top: 46px;
  max-width: 260px;
  border-top: 1px solid #484a47;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #484a47;
  padding: 13px;
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
    align-items: center;
  }

`;

const SidebarCreateIcon = styled(Create)`
  color: #484a47;
  margin-left: 30px;
`;

const SidebarStatusIcon = styled(FiberManualRecordRounded)`
  color: #06d6a0;
  transform: scale(0.5);
  margin-right: 5px;
`;