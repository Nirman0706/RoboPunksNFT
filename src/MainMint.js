import { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import './MainMint.css'
import roboPunksNFT from './RoboPunksNFT.json'
// import { Contract } from 'hardhat/internal/hardhat-network/stack-traces/model'

const roboPunksNFTAddress = '0x104752eb3A69F5e3632Ca0F1295B543B0453b680'

const MainMint = ({ userWallet, setUserWallet }) => {
  const [mintAmount, setAmount] = useState(1)
  // const isConnected = Boolean(accounts[0])

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer,
      )
      try {
        const response = await contract.mint(BigNumber.from(mintAmount))
        console.log('response', response)
      } catch (err) {
        console.log('error:', err)
      }
    }
  }
  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setAmount(mintAmount - 1)
  }
  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setAmount(mintAmount + 1)
  }
  return (
    <div className="mainmint">
      <h1 className="text_heading">RoboPunks</h1>
      {userWallet ? (
        <p className="text_main">
          Hey,<div className='user_live'>{userWallet}. </div>
          <div>Help the RoboPunks NFT</div>
          <div>to save humans from destructive rampant</div>
          <div>NFT speculation. Mint Now!!!</div>
        </p>
      ) : (
        <p className="text_main">
          <div>It's 2078. Can the RoboPunks NFT</div>
          <div>save humans from destructive rampant</div>
          <div>NFT speculation? Mint RoboPunk to find out</div>
        </p>
      )}

      {userWallet ? (
        <div>
          <div className="when_connected">
            <button className="button" onClick={handleDecrement}>
              -
            </button>
            <input
              readOnly
              type="number"
              className="input"
              itemType="number"
              value={mintAmount}
            />
            <button className="button" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="button_main" onClick={handleMint}>
            Mint Now
          </button>
        </div>
      ) : (
        <p className="when_not_connect">You must be connected to mint</p>
      )}
    </div>
  )
}
export default MainMint
