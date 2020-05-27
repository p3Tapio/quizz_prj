import React from 'react'

export const ResultsTable = ({ results }) => {

    if (results) {
        console.log('results.quizz', results[0].quizz_id)
        return (
            <>
                <h5 className=" mt-5">Parhaat pelaajat</h5>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary"><th>Pelaaja</th><th>Pisteet</th></tr>
                    </thead>
                    <tbody>
                        {results.slice(0,10).map((item) =>
                            <tr key={item.id} >
                                <td>{item.player}</td><td>{item.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
    } else {
        return <p>loading....</p>
    }
}
