import React from 'react'
//import { bgImage } from '../Components/Styles/StyleObjects'
import '../App.css';
import { getToken } from '../Components/Common/Auth/Sessions'

const Home = () => {
    const  user = getToken() 
    console.log('user', user)
    return (
        <div className="mt-4 ">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-2"></div>
                    <div className=" jumboshadow jumbotron text-left col-8 focus-in-expand" style={{ width: '50vw' }} >
                        <h1 className="text-center mb-4 jumboheader">Hello world!</h1>
                        <h2 className="jumbolead mb-3">Tämä on tietovisa-applikaatio!</h2>
                        <p className="jumbopara">
                        Sovelluksessa voi osallistua monivalintoihin perustuviin tietokilpailuihin ja kirjautumalla luoda omia tietovisoja
                        Tähän voisi lisätä jotain muutakin sisältöä, joka kuvaa sovelluksen toimintaa ja ominaisuuksia. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home