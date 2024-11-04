import { useState } from "react";
import BoardGame from './BoardGame';

function StartGame() {
    const players = JSON.parse(localStorage.getItem('players'));
    const [playingPlayers, setPlayingPlayers] = useState(players.filter(player => player.isPlaying));
    const [started, setStarted] = useState(false);
    const [activePlayer, setActivePlayer] = useState(0);

    const displayBoardsGame = () => {
        setStarted(true);
        // setStartDisplay(prev => !prev);
    }

    return (
        <>
            {!started && <button onClick={displayBoardsGame}>start game</button>}
            {started && playingPlayers.map((player) => <BoardGame key={player.username}
                name={player.username}
                setPlayingPlayers={setPlayingPlayers}
                playingPlayers={playingPlayers}
                activePlayer={activePlayer}
                setActivePlayer={setActivePlayer} />)}
        </>
    )
}

export default StartGame;