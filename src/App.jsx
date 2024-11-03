import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import StartGame from './components/StartGame'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState();
  const [startDisplay, setStartDisplay] = useState(false);
  console.log(startDisplay)
  function displayStartGame() {
    setStartDisplay(prev => !prev)
  }
  return (
    <>
      <button onClick={() => setSignUpDisplay(true)}>add player</button>
      {signUpDisplay && <SignUp setStartDisplay={displayStartGame}/>}
      {startDisplay && <StartGame/>}
    </>
  )
}

export default App
