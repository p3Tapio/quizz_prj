import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResultsTable } from './ResultsTable';
import axios from 'axios';
import { getUser } from '../Common/Auth/Sessions'


export const Results = ({ right, all, time, results, setResults, id }) => {

    const [user, setUser] = useState()
    const [showMsg, setMsg] = useState(true)


    useEffect(() => {

        if (getUser()) setUser(getUser().username)

        if (results) {
            setResults(results.sort((x, y) => y.score - x.score))
        }
    }, [results, setResults])

    const tallenna = () => {

        if (getUser()) {
            const user = getUser().username

            const config = { headers: { 'Content-Type': 'application/json' } }
            const body = JSON.stringify({
                player: user,
                score: right,
                quizz_id: id
            })
            axios.post('http://localhost:8000/api/results/', body, config).then((res) => {
                setResults(results.concat(res.data).sort((x, y) => y.score - x.score))
                setMsg(false)
            }).catch(err => console.log('err.response.data', err.response.data))
        }
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-8 m-auto">
                        <h4 className="focus-in-expand">Sait {right}/{all} oikein! Aikaa sinulla kului {time} sekuntia!</h4>
                        {showMsg ?
                            getUser() ? <p>{user}, tallennetaanko tuloksesi? <strong className="ml-2 joo" onClick={tallenna}>Kyllä</strong></p>
                                : <p>Alla näet kymmenen parhaiten pärjänneet pelaajat. Voit tallentaa oman nimimerkkisi <Link to='/login'>kirjautumalla</Link> tai luomalla <Link to='/register'>käyttäjätilin</Link></p>
                            : <></>}
                        <Link to="/tietovisat" className="link">Palaa takaisin</Link>
                        <hr />
                        <ResultsTable results={results} />
                    </div>
                </div>
            </div>
        </>
    )
}
