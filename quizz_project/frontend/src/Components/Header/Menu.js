import React from 'react'
import { Link } from 'react-router-dom'
import { getToken, removeUserSession } from '../common/auth/sessions'

const Menu = () => {

    const links = getToken() ? <>
        <Link to="/userpage" className="nav-link">Omat sivut</Link>
        <Link to={'/'} className="nav-link" onClick={() => removeUserSession()}>Kirjaudu ulos</Link> </>
        : <Link to="/login" className="nav-link">Kirjaudu</Link>

    return (
        <div className="mb-4" style={{ width: "200px" }}>
            <Link to="/" className="nav-link">Etusivu</Link>
            <Link to="/tietovisat" className="nav-link">Tietovisat</Link>
            {links}
        </div>
    )
}
export default Menu
