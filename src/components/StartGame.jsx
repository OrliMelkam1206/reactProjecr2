import { useState } from "react";
import BoardGame from './BoardGame';

function StartGame(props) {
    
    console.log(props.playingPlayers);
    const [started, setStarted] = useState(false);
    const [activePlayer, setActivePlayer] = useState(0);
    const displayBoardsGame = () => {
        setStarted(true);
        // setStartDisplay(prev => !prev);
    }

    return (
        <>
            {!started && <button onClick={displayBoardsGame}>start game</button>}
            <div className="board-gameContainer">
                {started && props.playingPlayers.map((player) => <BoardGame key={player.username}
                    name={player.username}
                    setPlayingPlayers={props.setPlayingPlayers}
                    playingPlayers={props.playingPlayers}
                    activePlayer={activePlayer}
                    setActivePlayer={setActivePlayer} />)}
            </div>
        </>
    )
}

export default StartGame;