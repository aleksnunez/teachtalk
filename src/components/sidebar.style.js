import { 
    Create, 
    FiberManualRecordRounded } from "@material-ui/icons";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  color: #484a47;
  background-color: var(--teach-color);
  flex: 0.15;
  margin-top: 46px;
  max-width: 260px;
  border-top: 1px solid #484a47;

  > hr {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #484a47;
    
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #484a47;
  padding: 13px;
`;

export const SidebarInfo = styled.div`
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

export const SidebarCreateIcon = styled(Create)`
  color: #484a47;
  margin-left: 30px;
`;

export const SidebarStatusIcon = styled(FiberManualRecordRounded)`
  color: #06d6a0;
  transform: scale(0.5);
  margin-right: 5px;
`;