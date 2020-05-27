import React from 'react'

export const NameDescription = ({ handleChange, handleFirstSubmit }) => {
    return (

        <div className="col-lg-8 m-auto px-4 mt-4">
            <form id="nameDescription">
                <div className="form-group">
                    <label>Nimi</label>
                    <input type="text" className="form-control" id='nimi' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Kuvaus</label>
                    <textarea className="form-control" id="kuvaus" rows="3" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Kesto</label>
                    <input type="text" className="form-control" id='kesto' onChange={handleChange} />
                </div>
                <div className="form-group text-right">
                    <button onClick={handleFirstSubmit} id="nameDescription" className="btn btn-outline-primary mt-3">Tallenna</button>
                </div>
            </form>
        </div>
    )
}
