import React from "react";
import { useState } from "react";

function BoardGame(props) {
    const [num, setNum] = useState(Math.floor(Math.random() * 99));
    const [score, setScore] = useState(0);
    const [activePlayer, setActivePlayer] = useState(0);

    const playerPlaying = () => {
        if (props.name === props.playingPlayers[activePlayer].username) {
        return true;
    }
    else
        return false;
    }


    const plusOne = () => {
        setNum(num + 1);
        setScore(score + 1)
        setActivePlayer(activePlayer + 1)
        if (num + 1 === 100) {
            const newPlayers = props.playingPlayers.filter(player => player.username !== props.name)
            props.setPlayingPlayers(newPlayers);
        }
    }
    const minusOne = () => {
        setNum(num - 1);
        setScore(score + 1)
        if(num - 1 === 100){
            const newPlayers = props.playingPlayers.filter(player => player.username !== props.name)
            props.setPlayingPlayers(newPlayers);        }
    }
    const multiplyByTwo = () => {
        setNum(num * 2);
        setScore(score + 1)
        if(num * 2 === 100){
            const newPlayers = props.playingPlayers.filter(player => player.username !== props.name)
            props.setPlayingPlayers(newPlayers);        }
    }
    const divideByTwo = () => {
        setNum(num / 2);
        setScore(score + 1)
        if(num / 2 === 100){
            const newPlayers = props.playingPlayers.filter(player => player.username !== props.name)
            props.setPlayingPlayers(newPlayers);        }
    }
    return (
        <div className="board-game">
            <h2>{props.name}</h2>
            <div>{num}</div>
            {playerPlaying &&
                <div className="buttons-container">
                    <button onClick={plusOne}>+1</button>
                    <button onClick={minusOne}>-1</button>
                    <button onClick={multiplyByTwo}>*2</button>
                    <button onClick={divideByTwo}>/2</button>
                </div>
            }
            <div>{score}</div>
        </div>
    )
}

export default BoardGame;