import React from "react";
import { useState } from "react";

function BoardGame(props) {
    const [num, setNum] = useState(99);
    const [score, setScore] = useState(0);

    const playerPlaying = () => {
        if (props.name === props.playingPlayers[props.activePlayer].username) {
            return true;
        }
        else
            return false;
    }

    const plusOne = () => {
        setNum(num + 1);
        setScore(score + 1)
        if (props.activePlayer === props.playingPlayers.length - 1) {
            props.setActivePlayer(0)
        }
        else {
            props.setActivePlayer(props.activePlayer + 1)
        }
        if (num + 1 === 100) {
            let updatedPlayers = JSON.parse(localStorage.getItem('players'));
            for (let i = 0; i < updatedPlayers.length; i++) {
                if (updatedPlayers[i].username === props.name) {
                    updatedPlayers[i].isPlaying = false;
                    updatedPlayers[i].scores.push(score + 1);
                    localStorage.setItem('players', JSON.stringify(updatedPlayers));
                }
            }
            const newPlayers = props.playingPlayers.filter(player => player.username !== props.name)
            props.setPlayingPlayers(newPlayers);
            if (props.activePlayer === props.playingPlayers.length - 1) {
                props.setActivePlayer(0)
            }
            else {
                props.setActivePlayer(props.activePlayer)
            }
        }
    }
    const minusOne = () => {
        setNum(num - 1);
        setScore(score + 1)
        if (props.activePlayer === props.playingPlayers.length - 1) {
            props.setActivePlayer(0)
        }
        else {
            props.setActivePlayer(props.activePlayer + 1)
        }
        if (num - 1 === 100) {
            props.setPlayingPlayers(props.playingPlayers.filter(player => player.username !== props.name));
            if (props.activePlayer === props.playingPlayers.length - 1) {
                props.setActivePlayer(0)
            }
            else {
                props.setActivePlayer(props.activePlayer)
            }
        }
    }
    const multiplyByTwo = () => {
        setNum(num * 2);
        setScore(score + 1)
        if (props.activePlayer === props.playingPlayers.length - 1) {
            props.setActivePlayer(0)
        }
        else {
            props.setActivePlayer(props.activePlayer + 1)
        }
        if (num * 2 === 100) {
            props.setPlayingPlayers(props.playingPlayers.filter(player => player.username !== props.name));
            if (props.activePlayer === props.playingPlayers.length - 1) {
                props.setActivePlayer(0)
            }
            else {
                props.setActivePlayer(props.activePlayer)
            }
        }
    }
    const divideByTwo = () => {
        setNum(Math.floor(num / 2));
        setScore(score + 1)
        if (props.activePlayer === props.playingPlayers.length - 1) {
            props.setActivePlayer(0)
        }
        else {
            props.setActivePlayer(props.activePlayer + 1)
        }
        if (Math.floor(num / 2) === 100) {
            props.setPlayingPlayers(props.playingPlayers.filter(player => player.username !== props.name));
            if (props.activePlayer === props.playingPlayers.length - 1) {
                props.setActivePlayer(0)
            }
            else {
                props.setActivePlayer(props.activePlayer)
            }
        }
    }
    return (
        <div className="board-game">
            <h2>{props.name}</h2>
            <div>{num}</div>
            {playerPlaying() &&
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