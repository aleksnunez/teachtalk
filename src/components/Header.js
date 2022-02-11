import React from 'react'
import { Button } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';

import {
    HeaderLeft, 
    HeaderRight, 
    HeaderContainer, 
    HeaderAvatar, 
    HeaderSearch } from './header.style'

import { auth } from '../firebase';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft> 
            <HeaderAvatar // TODO: add on click
                />
         {/* TODO: create custom svg logo */}      
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='search' />
            </HeaderSearch>
            <HeaderRight>
                <Button
                style={{
                    textTransform: "none",
                    variant: "contained",
                    backgroundColor: "#484a47",
                    color: "white"
                }}
                onClick={() => auth.signOut()}
                >logout</Button>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

// Todo
