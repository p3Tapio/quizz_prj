import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import request from '../Components/Common/HttpRequests'
import { TheGame } from '../Components/Quizz/TheGame';
import { Results } from '../Components/Quizz/Results';

const Quizz = () => {

    const { id } = useParams()
    const [quizz, setQuizz] = useState([])
    const [timer, setTimer] = useState()
    let timerStyle

    useEffect(() => {

        if (quizz.length === 0) {
            request.getQuizz(id).then(res => {
                setQuizz(res)
                setTimer(res.timer_secs)
            })
        }
        const x = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(x);

    }, [id, timer, quizz.length])

    const handleAnswerChange = (ev) => {
        console.log('ev.target.value', ev.target.value)
    }

    timerStyle = timer > 10 ? timerStyle = {} : timerStyle = { color: 'red' }

    return (
        <div className="container mt-4">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h2 className="focus-in-expand"> {quizz.name}</h2>
                </div>
                <div className="col-4">
                    {timer === 0 ? <></> : <h4 className="mt-2" style={timerStyle}>Aikaa jäljellä {timer} sekuntia!</h4>}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    {timer > 0
                        ? <TheGame id={quizz.id} handleAnswerChange={handleAnswerChange} />
                        : <Results />}
                </div>
            </div>

        </div>
    )
}
export default Quizz