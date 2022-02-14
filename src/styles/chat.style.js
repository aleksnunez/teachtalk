import styled from 'styled-components';


export const ChatContainer = styled.div`
    flex: 1;
    overflow-y: scroll;
    margin-top: 50px;
    margin-left: 5px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        text-transform: lowercase;
    }
`;

export const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    
`;

export const ChatMessages = styled.div`
    
`