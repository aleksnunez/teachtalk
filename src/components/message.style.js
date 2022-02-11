import styled from "styled-components"

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        width: 60px;
        border-radius: 10px;
    }
`

export const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 > span {
        color: darkgray;
        font-weight: 300;
        font-size: small;
        margin-left: 5px;
    }
`