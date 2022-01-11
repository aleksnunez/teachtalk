import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

import {HeaderLeft, 
    HeaderRight, 
    HeaderContainer, 
    HeaderAvatar, 
    HeaderSearch} from './header.style'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft> 
         {/* TODO: create custom svg logo */}      
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='search' />
            </HeaderSearch>
            <HeaderRight>
                <HeaderAvatar // TODO: add on click
                />
                </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

// Todo
