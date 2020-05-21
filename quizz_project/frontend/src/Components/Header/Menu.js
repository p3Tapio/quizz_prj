import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    return (
        <div className="mb-4" style={{width:"100px"}}>
            <Link to="/" className="nav-link">Etusivu</Link>
            <Link to="/tietovisat" className="nav-link">Tietovisat</Link>
            <Link to="/login" className="nav-link">Kirjaudu</Link>
        </div>
        )
}
export default Menu
