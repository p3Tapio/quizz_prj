import React from 'react'

export const Results = ({right, all, time}) => {
    return (
        <div>
            <p>Sait {right} oikein {all}sta kysymyksestä! Aikaa sinulla kului {time} sekuntia!</p>
        </div>
    )
}
