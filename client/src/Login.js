import { useState } from 'react'

function Login(user, setUser, admin, setAdmin) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [adminUsername, setAdminUsername] = useState('')
    const [adminPassword, setAdminPassword] = useState('')

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

    const handleAdminLogin = (e) => {
        e.preventDefault()
        fetch('/admin_login', {
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
                setAdmin(data)
            } else if(data.errors) {
                setError(data.errors)
            }
        })
    }

    const handleChangeUsername = e => setUsername(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    const handleAdminChangeUsername = e => setAdminUsername(e.target.value)
    const handleAdminChangePassword = e => setAdminPassword(e.target.value)

    if (user && user.id) {
        return (
            <div>
                User Already Logged In
            </div>
        )
    }

    if (admin && admin.id) {
        return (
            <div>
                Admin Already Logged In
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
                    type="text" onChange={handleChangePassword} value={password} placeholder="Please Enter Password"
                />
                <br></br>
                <input 
                    type="submit" value="Login"
                />
            </form>
            <form onSubmit={handleAdminLogin}>
                <p style={{color: 'red'}}>{error ? error : null}</p>

                <p>Admin Login:</p>

                <input
                    type="text" onChange={handleAdminChangeUsername} value={adminUsername} placeholder="Please Enter Username" 
                />
                <br></br>
                <input
                    type="text" onChange={handleAdminChangePassword} value={adminPassword} placeholder="Please Enter Password"
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