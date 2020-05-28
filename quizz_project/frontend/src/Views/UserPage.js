import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getUser } from '../Components/Common/Auth/Sessions'
import { Link } from 'react-router-dom'
import { QuizzTable } from '../Components/UserPage/QuizzTable';

// TODO: Aikaisemmin luotujen kyselyiden muokkaus 

const UserPage = () => {
    const user = getUser()

    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const userId = getUser().id
        axios.get(`http://localhost:8000/api/quizzes/?owner=${userId}`)
            .then(res => setQuizzes(res.data))
    }, [])

    const handleDelete = (ev) => {

        const id = parseInt(ev.target.id)
        const toDel = quizzes.find(x => x.id === id)
        if (toDel) {
            if (window.confirm(`Haluatko varmasti poistaa ${toDel.name} -tietovisan?`)) {
                axios.delete(`http://localhost:8000/api/quizzes/${id}`).then(() => {
                    alert('Tietovisa poistettu!')
                    setQuizzes(quizzes.filter(x => x.id !== toDel.id))
                }).catch(err => console.log('err.response.data', err.response.data))
            }
        }
    }
    if (quizzes) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <h2 className="mt-4 focus-in-expand">Moi {user.username}</h2>
                        <hr />
                        <p className="mt-2 jumbopara">Alla näet luomasi tietovisat. Voit luoda uuden painamalla alla olevaa nappia. Luomasi tietovisan voi poistaa klikkaamalla ruksia.</p>
                        <Link to="/luouusi" className="btn btn-outline-primary">Luo uusi visailu!</Link>
                        <hr />
                        <QuizzTable userId={user.id} handleDelete={handleDelete} quizzes={quizzes} />
                    </div>
                </div>
            </div>
        )
    } else return <p>Loading...</p>
}
export default UserPage

