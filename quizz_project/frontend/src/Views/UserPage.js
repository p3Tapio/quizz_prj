import React from 'react'
import { getUser } from '../Components/Common/Auth/Sessions'

const UserPage = () => {

    const user = getUser()
    console.log('user', user)

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <h2 className="mt-4 focus-in-expand">Moi {user.username}</h2>
                    <p className="mt-2 jumbopara">Alla tulet näkemään luomasi tietovisat. Voit luoda uuden painamalla nappia</p>
                </div>
            </div>
        </div>
    )
}
export default UserPage

// Uusi on http://localhost:8000/api/quizzes/ POST jaa bodyssä JSON (name,description, timer, mites owner hmm? ks r/django/tut)