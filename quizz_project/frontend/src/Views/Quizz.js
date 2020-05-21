import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import request from '../Services/HttpRequests'
import Timer from '../Components/Timer';

const Quizz = () => {

    const { id } = useParams()
    const [quizz, setQuizz] = useState([])
    const [timer, setTimer] = useState()

    useEffect(() => {
        request.getQuizz(id).then(res => {
            setQuizz(res)
            setTimer(res.timer_secs)
        })
        
    }, [id])
    const handleTimerChange = (ev) => {
      console.log('ev.target.value', ev.target.value)
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h2 className="focus-in-expand"> {quizz.name}</h2>
                </div>
                <div class="col-4">
                    <Timer time={quizz.timer_secs} handleTimerChange={handleTimerChange}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">

                </div>
            </div>

        </div>
    )
}
export default Quizz

