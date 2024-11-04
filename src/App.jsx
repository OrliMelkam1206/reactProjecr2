import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import StartGame from './components/StartGame'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState(true);
  const [startDisplay, setStartDisplay] = useState(false);
  const [addPlayerDisplay, setAddPlayerDisplay] = useState(false);
  const players = JSON.parse(localStorage.getItem('players'));
    console.log(players);
    console.log(players.filter(player => player.isPlaying))
    const [playingPlayers, setPlayingPlayers] = useState(players.filter(player => player.isPlaying));
  // function displayStartGame() {
  //   setStartDisplay(prev => !prev)}
  // function stopDisplayStartGame() {
  //   setSignUpDisplay(true)
  // }
  function onAddPlayerClick() {
    setAddPlayerDisplay(false);
    setSignUpDisplay(true)
  }
  return (
    <>
      {addPlayerDisplay && <button onClick={onAddPlayerClick} > add player</button >}
      {signUpDisplay && <SignUp setPlayingPlayers={setPlayingPlayers} setStartDisplay={setStartDisplay} setSignUpDisplay={setSignUpDisplay} setAddPlayerDisplay={setAddPlayerDisplay} />}
      {startDisplay && <StartGame playingPlayers={playingPlayers} setPlayingPlayers={setPlayingPlayers}/>}

    </>
  )
}

export default App
