import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react'
// import { Flex } from '@chakra-ui/core';
import Facebook from './assets/assets/social-media-icons/facebook_32x32.png'
import Twitter from './assets/assets/social-media-icons/twitter_32x32.png'
import Email from './assets/assets/social-media-icons/email_32x32.png'
import UAuth from '@uauth/js'

import './NavBar.css'

const uauth = new UAuth({
  clientID: '2d1c3334-fe0f-48b4-a635-af406cf595f2',
  redirectUri: 'http://localhost:3000',
  scope: 'openid wallet',
})

const NavBar = ({ userWallet, setUserWallet }) => {
  // const [userWallet, setUserWallet] = useState(null)
  // const isConnected = Boolean(accounts[0])

 const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      uauth.user().then((user) => {
        setUserWallet(user.sub)
        // const accounts = user;
        
        // user exist
        console.log('User information:', user)
      })
      console.log(authorization)
    } catch (err) {
      console.error(err)
    }
  }
  const logout = async () => {
    try {
      await uauth.logout()
      setUserWallet(null)
    } catch (err) {
      console.error(err)
    }
  }

  // async function connectAccount() {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       method: 'eth_requestAccounts',
  //     })
  //     setAccounts(accounts)
  //   }
  // }
  return (
    <div className="main">
      {/* {left side social media icons} */}
      <div className="left">
        <Link href="">
          <Image
            className="image"
            src={Facebook}
            boxSize="42px"
            margin="0 15px"
          ></Image>
        </Link>
      </div>
      <div className="left">
        <Link href="">
          <Image
            className="image"
            src={Twitter}
            boxSize="42px"
            margin="0 15px"
          ></Image>
        </Link>
      </div>
      <div className="left">
        <Link href="">
          <Image
            className="image"
            src={Email}
            boxSize="42px"
            margin="0 15px"
          ></Image>
        </Link>
      </div>
      <div className="middle"></div>
      {/* {right side sections and connect} */}
      <div
        className="right"
        justify="space-around"
        align="center"
        width="40%"
        padding="30px"
      >
        <div className="box">About</div>
        <Spacer />
        <div className="box">Mint</div>
        <Spacer />
        <div className="box">Team</div>
        <Spacer />
      </div>
      {/* {connect} */}
      {userWallet ? (
        <p className="live">Connected</p>
      ) : (
        <button className="button" onClick={login}>
          Connect
        </button>
      )}
    </div>
  )
}
export default NavBar
