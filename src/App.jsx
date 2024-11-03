import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState(false);
  const [startDisplay, setStartDisplay] = useState(false);
  return (
    <>
      <button onClick={() => setSignUpDisplay(true)}>add player</button>
      {signUpDisplay && <SignUp/>}
      {startDisplay && <button>start game</button>}
    </>
  )
}

export default App
