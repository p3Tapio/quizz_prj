import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { setUserSession } from '../Components/Common/Auth/Sessions'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleLoginSubmit = (ev) => {
        ev.preventDefault();

        if (username && password) {
            const config = { headers: { 'Content-Type': 'application/json' } }
            const body = JSON.stringify({ username, password })
            axios.post('http://localhost:8000/api/auth/login', body, config)
                .then(res => {
                    setUserSession(res.data.token, res.data.user);       // LOGIN OK redirect    
                    window.location.reload()                            // hot to redirect paremmin?
                })
                .catch(err => {
                    console.log('err.response.data', err.response.data) // TODO: wrong x, y 
                })
        } else {
            alert("Käyttäjätunnus tai salasana puuttuu!")   // TODO: siistimpi alert
        }
    }
    const handleInputChange = (ev) => {
        if (ev.target.name === 'username') setUsername(ev.target.value)
        else if (ev.target.name === 'password') setPassword(ev.target.value)
    }
    return (
        <div className="col-lg-3 m-auto px-4">
            <div className="card card-body mt-4 quizzcardshadow">
                <h3 className="text-center">Login</h3>
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label>Käyttäjätunnus</label>
                        <input type="text" className="form-control" name="username" onChange={handleInputChange} value={username} />
                    </div>
                    <div className="form-group">
                        <label>Salasana</label>
                        <input type="password" className="form-control" name="password" onChange={handleInputChange} value={password} />
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-outline-primary mt-3">Kirjaudu</button>
                    </div>
                    <p className="text-right">
                        Haluatko rekisteröityä käyttäjäksi? <Link to="/register" className="ml-1">Rekisteröidy</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login