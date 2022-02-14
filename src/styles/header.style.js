import styled from 'styled-components'
import FaceIcon from '@material-ui/icons/Face';

export const HeaderSearch = styled.div`
    flex: 0.11;
    opacity: 1;
    border-radius: 6px;
    text-align: center;
    display: flex;
    padding: 0 20px;
    color: #484a47;
    background-color: #e0ac9d;
    border: 1px black solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;

    }
`

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--teach-color);
`

export const HeaderLeft = styled.div`

`

export const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

export const HeaderAvatar = styled(FaceIcon)`
    cursor: pointer;
    color: #484a47;
    :hover {
        opacity: 0.7;
    }

`