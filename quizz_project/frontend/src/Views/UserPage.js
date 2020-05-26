import React from 'react'
import { getUser } from '../Components/Common/Auth/Sessions'
import { Link } from 'react-router-dom'
const UserPage = () => {

    const user = getUser()
    console.log('user', user)

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <h2 className="mt-4 focus-in-expand">Moi {user.username}</h2>
                    <hr />
                    <p className="mt-2 jumbopara">Alla näet luomasi tietovisat. Voit luoda uuden painamalla alla olevaa nappia. Aikaisemmin luomiasi kyselyitä voit muokata muokkaa-näppäimellä ja voit poistaa visailun poista-nappulasta.</p>
                    <Link to="/luouusi" className="btn btn-outline-primary">Luo uusi visailu!</Link>
                </div>
            </div>
        </div>
    )
}
export default UserPage

