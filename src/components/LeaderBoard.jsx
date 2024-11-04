import React from "react";
import { useState } from "react";

function LeaderBoard() {

    let place1 = { username: '', score: 0 };
    let place2 = { username: '', score: 0 };
    let place3 = { username: '', score: 0 };
    const players = JSON.parse(localStorage.getItem('players'))
    players.forEach(player => {
        let average = 0;
        player.scores.forEach(score => {
            average += score;
        })
        average = average / player.scores.length;
        if (average != 0) {
            if (!isGreaterThanPlace1({ username: player.username, score: average })) {
                if (!isGreaterThanPlace2({ username: player.username, score: average })) {
                    isGreaterThanPlace3({ username: player.username, score: average });
                }
            }
        }
    });



    function isGreaterThanPlace1(player) {
        if (place1.score !== 0) {
            if (player.score < place1.score) {
                let toBeNextPlace = place1;
                place1 = player;
                place3 = place2;
                place2 = toBeNextPlace;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            place1 = player;
            return true;
        }
    }
    function isGreaterThanPlace2(player) {
        if (place2.score !== 0) {
            if (player.score < place2.score) {
                place3 = place2;
                place2 = player;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            place3 = place2;
            place2 = player;
            return true;
        }
    }
    function isGreaterThanPlace3(player) {
        if (place3.score !== 0) {
            if (player.score < place1.score) {
                place3 = player;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            place3 = player;
            return true;
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{place1.username}</td>
                    <td>{place1.score}</td>
                </tr>
                <tr>
                    <td>{place2.username}</td>
                    <td>{place2.score}</td>
                </tr>
                <tr>
                    <td>{place3.username}</td>
                    <td>{place3.score}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default LeaderBoard;