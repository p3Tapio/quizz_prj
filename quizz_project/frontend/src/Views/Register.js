import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';

 const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')

    const handleRegisterSubmit = (ev) => {


        
    }
    const handleInputChange = (ev) => {

        if (ev.target.name === 'username') setUsername(ev.target.value)
        else if (ev.target.name === 'password') setPassword(ev.target.value)
        else if (ev.target.name === 'password2') setPassword2(ev.target.value)
        else if (ev.target.name === 'email') setEmail(ev.target.value)
    }

    return (
        <div>
            <div className="col-lg-3 m-auto px-4">
                <div className="card card-body mt-4 quizzcardshadow">
                    <h3 className="text-center">Rekisteröidy</h3>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="form-group">
                            <label>Käyttäjätunnus</label>
                            <input type="text" className="form-control" name="username" onChange={handleInputChange} value={username} />
                        </div>
                        <div className="form-group">
                            <label>Sähköposti</label>
                            <input type="email" className="form-control" name="email" onChange={handleInputChange} value={email} />
                        </div>
                        <div className="form-group">
                            <label>Salasana</label>
                            <input type="password" className="form-control" name="password" onChange={handleInputChange} value={password} />
                        </div>
                        <div className="form-group">
                            <label>Salasana uudelleen</label>
                            <input type="password" className="form-control" name="password2" onChange={handleInputChange} value={password2} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary">Rekisteröidy</button>
                        </div>
                        <p>
                            Onko sinulla jo käyttäjätili? <Link to="/login" className="ml-1">Kirjaudu</Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register