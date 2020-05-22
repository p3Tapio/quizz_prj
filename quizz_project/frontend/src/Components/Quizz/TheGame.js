import React, { useEffect, useState } from 'react'
import request from '../../Services/HttpRequests'

export const TheGame = ({ id }) => {

    const [questions, setQuestions] = useState()
    const [questionNo, setQuestionNo] = useState(0)

    useEffect(() => {
        request.getQuestions(id).then(res => setQuestions(res))
    }, [id])

    const handleAnswer = (ev) => {
        if (questions.length > questionNo) setQuestionNo(questionNo + 1)
        else {

        }
    }
    if (questions) {
        return (
            <div className="mt-4">

                <div className="card-header">
                    {questions[questionNo].question}
                </div>
                <div className="card-body">
                </div>
            </div>
        )
    } else {
        return <p>loadian</p>
    }



}
