import { useState } from 'react'

function Login({user, setUser}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            if(data.id) {
                setError('')
                setUser(data)
            } else if(data.errors) {
                setError(data.errors)
            }
        })
    }


    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)


    if (user && user.id) {
        return (
            <div>
                {user.username} is Already Logged In
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <p style={{color: 'red'}}>{error ? error : null}</p>

                <p>User Login:</p>

                <input
                    type="text" onChange={handleChangeUsername} value={username} placeholder="Please Enter Username" 
                />
                <br></br>
                <input
                    type="password" onChange={handleChangePassword} value={password} placeholder="Please Enter Password"
                />
                <br></br>
                <input 
                    type="submit" value="Login"
                />
            </form>
        </div>
    )
}

export default Login;