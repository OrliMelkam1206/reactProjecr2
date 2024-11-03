import React from "react";
import { useState } from "react";



function SignUp(props) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const twoInitialPlayers = [{ username: "noi", password: '123', isPlaying: true },
    { username: "orli", password: '123', isPlaying: true }];
    localStorage.setItem('players', JSON.stringify(twoInitialPlayers));

    const onRegister = () => {
        let exist = false;
        const players = JSON.parse(localStorage.getItem('players'));
        for (let i = 0; i < players.length; i++) {
            if (players[i].username === username && players[i].password === password) {
                exist = true;
                alert('exist');
            }
        }
        if (exist === false) {
            players.push({ username: username, password: password, isPlaying: true });
            localStorage.setItem('players', JSON.stringify(players));
        }
        props.setStartDisplay(true);
    }

    return (
        <form>
            <h1>sign up!</h1>
            <div>
                <label id="username-label" >username</label>
                <input value={username} type="text" id="username" placeholder="username" onChange={(e) => { setUsername(e.target.value); }} required />
            </div>
            <div>
                <label>Password</label>
                <input value={password} type="password" id="password" name="psw" onChange={(e) => { setPassword(e.target.value); }} required />
            </div>
            <div>
                <button id="submit" onClick={onRegister}>submit</button>
            </div>
        </form>
    )
}

export default SignUp;