// import logo from './logo.svg'
import { useState } from 'react'
import NavBar from './NavBar'
import MainMint from './MainMint'
import './App.css'

function App() {
  const [userWallet, setUserWallet] = useState(null)

  return(
  <div className="overlay">
    <div className="App">
      <NavBar userWallet={userWallet} setUserWallet={setUserWallet} />
      <MainMint userWallet={userWallet} setUserWallet={setUserWallet} />
    </div>
    <div className='moving-background' ></div>
    </div>
  )
}

export default App
