import React from 'react'

export const ResultsTable = ({ results }) => {

    if (results === undefined) return <p>loading...</p>
    else {
        return (
            <>
                <h5 className=" mt-5">10 parasta tulosta!</h5>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-primary"><th>Pelaaja</th><th>Pisteet</th></tr>
                    </thead>
                    <tbody>
                        {results.slice(0, 10).map((item) =>
                            <tr key={item.id} >
                                <td>{item.player}</td><td>{item.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}
