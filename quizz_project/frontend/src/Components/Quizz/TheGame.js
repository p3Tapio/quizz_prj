import React, { useEffect, useState } from 'react'
import request from '../Common/HttpRequests'
import {btnStyle} from '../Common/StyleObjects'

export const TheGame = ({ id, handleCorrect, handleGameOver }) => {

    const [questions, setQuestions] = useState()
    const [questionNo, setQuestionNo] = useState(0)

    useEffect(() => {
        request.getQuestions(id).then(res => setQuestions(res))
    }, [id])

    const handleAnswerClick = (ev) => {
        if (questions[questionNo].correct_option === ev.target.id) handleCorrect()
        if (questions.length === questionNo + 1) handleGameOver(questions.length)
        setQuestionNo(questionNo + 1)
    }

    if (questions) {
        return (
            <div className="mt-4">
                <div className="card border-secondary">
                    <div className="card-header">
                        <h4>{questions[questionNo].question}</h4>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <button style={btnStyle} className="btn btn-outline-primary " id='a' onClick={handleAnswerClick}>{questions[questionNo].option_a}</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button style={btnStyle} className="btn btn-outline-primary" id='b' onClick={handleAnswerClick}>{questions[questionNo].option_b}</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            {questions[questionNo].option_c ? <button style={btnStyle} className="btn btn-outline-primary" id='c' onClick={handleAnswerClick}>{questions[questionNo].option_c}</button> : <></>}
                        </div>
                        <div className="d-flex justify-content-center">
                            {questions[questionNo].option_d ? <button style={btnStyle} className="btn btn-outline-primary" id='d' onClick={handleAnswerClick}>{questions[questionNo].option_d}</button> : <></>}
                        </div>
                        <div className="d-flex justify-content-center">
                            {questions[questionNo].option_e ? <button style={btnStyle} className="btn btn-outline-primary" id='e' onClick={handleAnswerClick}>{questions[questionNo].option_e}</button> : <></>}
                        </div>

                    </div>
                </div>
            </div>
        )
    } else {
        return <p>loading.... </p>
    }
}
