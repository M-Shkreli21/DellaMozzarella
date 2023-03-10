import React, { useState } from 'react';

function Signup({addUser}) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [error, setError] = useState("")

    function clearForm() {
        setUsername("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
    }

    function addUsername(e) {
        setUsername(e.target.value)
    }
    function addEmail(e) {
        setEmail(e.target.value)
    }
    function addPassword(e) {
        setPassword(e.target.value)
    }
    function addPhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }
    function submitNewUser(e) {
        e.preventDefault()
        const newUser = {
            username: username,
            email: email,
            password: password,
            phone_number: phoneNumber
        }
        clearForm()
        addUser(newUser)
    }

    return (
        <div>
            <div className="new_user_form">
                <form onSubmit={submitNewUser}>
                <p style={{color: 'red'}}>{error ? error : null}</p>
                <h2>New User Signup</h2>
                    <input className="login-input" type="text" onChange={addUsername} value={username} placeholder="Enter Username" />
                    <br></br>
                    <input className="login-input" type="text" onChange={addEmail} value={email} placeholder="Enter Email" />
                    <br></br>
                    <input className="login-input" type="password" onChange={addPassword} value={password} placeholder="Enter Password" />
                    <br></br>
                    <input className="login-input" type="text" onChange={addPhoneNumber} value={phoneNumber} placeholder="Enter Phone Number" />
                    <br></br>
                    <input className="button" type="submit" value="Signup" />
                </form>
            </div>
        </div>
    )
}

export default Signup