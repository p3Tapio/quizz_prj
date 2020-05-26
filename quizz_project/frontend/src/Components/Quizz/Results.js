import React from 'react'
import { Link } from 'react-router-dom'
export const Results = ({right, all, time}) => {
    return (
        <div>
            <p>Sait {right} oikein {all}sta kysymyksestä! Aikaa sinulla kului {time} sekuntia!</p>
            <Link to="/tietovisat" className="btn btn-outline-primary">Palaa takaisin</Link>
        </div>
    )
}
