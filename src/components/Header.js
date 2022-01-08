import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar // TODO: add on click
                />
            </HeaderLeft>
            {/* Header Search */}

            {/* Header Right */}

        </HeaderContainer>
    )
}

export default Header

// Todo
const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--teach-color);
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.7;
    }

`