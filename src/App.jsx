import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import StartGame from './components/StartGame'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState(false);
  const [startDisplay, setStartDisplay] = useState(false);
  function displayStartGame() {
    setStartDisplay(prev => !prev)}
  function stopDisplayStartGame() {
    setSignUpDisplay(prev => !prev)
  }
  
  return (
    <>
      {signUpDisplay && <SignUp setStartDisplay={displayStartGame} setSignUpDisplay={setSignUpDisplay}/>}
      {startDisplay && <StartGame setSignUpDisplay={setSignUpDisplay}/>}
      <button onClick={() => setSignUpDisplay(true)}>add player</button>
      
    </>
  )
}

export default App
