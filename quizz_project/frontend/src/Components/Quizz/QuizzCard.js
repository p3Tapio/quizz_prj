import React from 'react'
import { Link } from 'react-router-dom'

const QuizzCard = ({ item, handleClickSurvey }) => {
    return (
        <div className="row justify-content-center">    
            <div className="col-8">
                <div className="card bg-light m-1 quizzcardshadow m-3" style={{ width: "17rem" }}>
                    <div className="card-header">
                        <h4 className="card-title mt-3">{item.name}</h4>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer text-center">
                        <Link to={`/tietovisat/${item.id}`} className="btn btn-outline-primary btn-sm">Osallistu!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizzCard