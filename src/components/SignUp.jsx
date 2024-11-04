import React from "react";
import { useState } from "react";



function SignUp(props) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // const twoInitialPlayers = [{ username: "noi", password: '123', isPlaying: true, scores: []},
    // { username: "orli", password: '1206', isPlaying: true, scores: [] }, 
    // { username: "tamar", password: '666', isPlaying: true, scores: []}];
    // localStorage.setItem('players', JSON.stringify(twoInitialPlayers));

    const onRegister = (e) => {
        e.preventDefault()
        let exist = false;
        const players = JSON.parse(localStorage.getItem('players'));
        if (!players) {
            localStorage.setItem('players', JSON.stringify([{ username: username, password: password, isPlaying: true, scores: [] }]));
        }
        else {
            for (let i = 0; i < players.length; i++) {
                if (players[i].username === username && players[i].password === password) {
                    exist = true;
                    alert('exist');
                }
            }
            if (exist === false) {
                players.push({ username: username, password: password, isPlaying: true, scores: [] });
                localStorage.setItem('players', JSON.stringify(players));
            }
        }
        props.setStartDisplay();
        props.setSignUpDisplay(prev => !prev)
    }

    return (
        <div className="formContainer">
        <form>
            <h1>  Make it to a hundred  </h1><br/>
            <h2> sign up! </h2><br/>
            <div><br/>
                <label id="username-label" >username</label>
                <input value={username} type="text" id="username" placeholder="username" onChange={(e) => { setUsername(e.target.value); }} required />
            </div>
            <div><br/>
                <label>Password</label>
                <input value={password} type="password" id="password" name="psw" onChange={(e) => { setPassword(e.target.value); }} required />
            </div>
            <div><br/>
                <button id="submit" onClick={onRegister}>submit</button>
            </div>
        </form>
        </div>
    )
}

export default SignUp;