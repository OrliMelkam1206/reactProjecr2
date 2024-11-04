import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import StartGame from './components/StartGame'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState(false);
  const [startDisplay, setStartDisplay] = useState(false);
  // function displayStartGame() {
  //   setStartDisplay(prev => !prev)}
  // function stopDisplayStartGame() {
  //   setSignUpDisplay(true)
  // }
  
  return (
    <>
      <button onClick={() => setSignUpDisplay(true)}>add player</button>
      {signUpDisplay && <SignUp setStartDisplay={setStartDisplay} setSignUpDisplay={setSignUpDisplay}/>}
      {startDisplay && <StartGame />}
      
    </>
  )
}

export default App
