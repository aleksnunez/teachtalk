import React from 'react'
import myImage from "../assets/trans_csed.png"

import { Button } from '@mui/material'

import { LoginContainer, LoginInnerContainer } from './login.style'
import { Box } from '@mui/system'
import { auth, provider } from '../firebase'

const Login = () => {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
        alert(error.message))
    }

  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src={myImage} alt='cs ed logo'/>
            <Box textAlign='center'>
            <Button
            style={{
                backgroundColor: "#e88873",
                color: "black",
                textTransform: "none"
            }}
            variant='contained'
            onClick={signIn} >
            Sign in with Google
            </Button>
            </Box>
        </LoginInnerContainer>
    </LoginContainer>
    
  )
}

export default Login