import React, { useState, useEffect } from 'react'


const Timer = ({ time, handleTimerChange }) => {

    const [timer, setTimer] = useState()
    useEffect(() => {
        if (timer === undefined) setTimer(time)
        const x = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(x);
    }, [timer, time]);

    return (
        <div>
            {/* <h4 onChange={handleTimerChange} id={timer} className="mt-3">Aikaa jäljellä {timer} sekunttia!</h4> */}
            {/* <input onChange={handleTimerChange} value={`Aikaa jäljellä ${timer}`} /> */}
        </div>
    )
}
export default Timer

