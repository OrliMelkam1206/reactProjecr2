import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import StartGame from './components/StartGame'
import LeaderBoard from './components/LeaderBoard'

function App() {
  const [signUpDisplay, setSignUpDisplay] = useState(true);
  const [startDisplay, setStartDisplay] = useState(false);
  const [addPlayerDisplay, setAddPlayerDisplay] = useState(false);
  const [leaderBoardDisplay, setLeaderBoardDisplay] = useState(false);
  const players = JSON.parse(localStorage.getItem('players'));
  const [playingPlayers, setPlayingPlayers] = useState(players.filter(player => player.isPlaying));
  // function displayStartGame() {
  //   setStartDisplay(prev => !prev)}
  // function stopDisplayStartGame() {
  //   setSignUpDisplay(true)
  // }
  function onAddPlayerClick() {
    setAddPlayerDisplay(false);
    setSignUpDisplay(true);
    setLeaderBoardDisplay(false)
  }
  function displayLeaderBoard() {
    setSignUpDisplay(false);
    setLeaderBoardDisplay(prev => !prev);
    setAddPlayerDisplay(true);
  }
  return (
    <>
      {addPlayerDisplay && <button onClick={onAddPlayerClick} > add player</button >}
      <button onClick={displayLeaderBoard}>leader board</button>
      {leaderBoardDisplay && <LeaderBoard />}
      {signUpDisplay && <SignUp setPlayingPlayers={setPlayingPlayers} setStartDisplay={setStartDisplay} setSignUpDisplay={setSignUpDisplay} setAddPlayerDisplay={setAddPlayerDisplay} />}
      {startDisplay && <StartGame playingPlayers={playingPlayers} setPlayingPlayers={setPlayingPlayers} />}
      
    </>
  )
}

export default App
