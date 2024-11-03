import React from "react";
import { useState } from "react";
import BoardGame from './BoardGame';

function StartGame() {
    const players = JSON.parse(localStorage.getItem('players'));
    const [playingPlayers ,setPlayingPlayers] = useState(players.filter(player => player.isPlaying));
    const [started, setStarted] = useState(false);
    const displayBoardsGame = () => {
        setStarted(true);
    }

    return (
        <>
            <button onClick={displayBoardsGame}>start game</button>
            {started && playingPlayers.map((player, index) => <BoardGame key={index} name={player.username} 
            setPlayingPlayers={setPlayingPlayers} 
            playingPlayers={playingPlayers}/>)}
        </>
    )
}

export default StartGame;