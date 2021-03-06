import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import request from '../components/common/httprequests'
import { TheGame } from '../components/quizz/thegame';
import { Results } from '../components/quizz/results';
import Loading from '../components/common/Loading'
import axios from 'axios';

const Quizz = () => {

    const { id } = useParams()
    const [quizz, setQuizz] = useState([])
    const [results, setResults] = useState()
    const [timer, setTimer] = useState()
    const [right, setRight] = useState(0)
    const [all, setAll] = useState()

    let timerStyle

    useEffect(() => {
        if (quizz.length === 0) {
            request.getQuizz(id).then(res => {
                setQuizz(res)
                setTimer(res.timer_secs)
            })
            axios.get(`https://shrouded-scrubland-85445.herokuapp.com/api/results/?quizz_id=${id}`)
                .then(res => setResults(res.data))
        }
        if (!all) {
            const x = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(x);
        }
    }, [id, timer, quizz.length, all])

    const handleGameOver = (all) => {
        setAll(all)
    }
    const handleCorrect = () => {
        setRight(right + 1)

    }
    timerStyle = timer > 10 ? timerStyle = {} : timerStyle = { color: 'red' }
    if (quizz.length!==0) {
        return (
            <div className="container mt-4">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <h2 className="focus-in-expand"> {quizz.name}</h2>
                    </div>
                    <div className="col-4">
                        {timer === 0 || all ? <></> : <h4 className="mt-3" style={timerStyle}>Aikaa jäljellä {timer} sekuntia!</h4>}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        {timer > 0 && !all
                            ? <TheGame id={quizz.id} handleCorrect={handleCorrect} handleGameOver={handleGameOver} />
                            : <Results right={right} all={all} time={quizz.timer_secs - timer} results={results} setResults={setResults} id={quizz.id} />}
                    </div>
                </div>

            </div>
        )
    } else { return <Loading /> }
}
export default Quizz