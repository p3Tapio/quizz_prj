import React from 'react'
import * as Icon from 'react-bootstrap-icons';

export const QuizzTable = ({  handleDelete, quizzes}) => {

    return (
        <div>
            <table className="table table-hover mt-5">
                <thead>
                    <tr className="table-primary"><th>Nimi</th><th>Kuvaus</th><th>Kesto</th><th></th></tr>
                </thead>
                <tbody>
                    {quizzes.map((item) =>
                        <tr key={item.id} >
                            <td>{item.name}</td><td>{item.description}</td><td>{item.timer_secs} sekuntia</td><td><Icon.XSquare id={item.id} onClick={handleDelete} size={25} className="ml-3" /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
