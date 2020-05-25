import React, { useState, useEffect } from 'react'
import QuizzCard from '../Components/Quizz/QuizzCard';
import request from '../Components/Common/HttpRequests'

const Quizzes = () => {
    const [quizzList, setQuizzList] = useState([])

    useEffect(() => {
        request.getQuizzes().then(res => { setQuizzList(res) })
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="focus-in-expand">Tietovisat!</h2> <hr />
            <div className="row ">
                {quizzList.map((item) =>
                    <QuizzCard key={item.id} item={item} />
                )}
            </div>
        </div>
    )
}
export default Quizzes