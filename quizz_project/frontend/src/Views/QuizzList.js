import React, { useState, useEffect } from 'react'
import QuizzCard from '../components/quizz/quizzcard';
import request from '../components/common/httprequests'

const Quizzes = () => {
    const [quizzList, setQuizzList] = useState([])

    useEffect(() => {
        request.getQuizzes().then(res => { setQuizzList(res) })
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="focus-in-expand">Tietovisat!</h2> <hr />
            <div className="align-self-left">
                <div className="row" >
                    {quizzList.map((item) =>
                        <QuizzCard key={item.id} item={item} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Quizzes