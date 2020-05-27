import React from 'react'

export const Questions = ({ handleChange, handleQSubmit }) => {
    const handleSubmitClick = (ev) => {
        ev.preventDefault()
        document.getElementById("questions").reset()
        handleQSubmit(ev.target.id) 
    }

    return (
        <div className="col-lg-8 m-auto px-4 mt-4">
            <form id="questions">
                <div className="form-group">
                    <label>Kysymys</label>
                    <input type="text" className="form-control" id='kysymys' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Vaihtoehto A</label>
                    <input type="text" className="form-control" id='va' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Vaihtoehto B</label>
                    <input type="text" className="form-control" id='vb' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Vaihtoehto C</label>
                    <input type="text" className="form-control" id='vc' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Vaihtoehto D</label>
                    <input type="text" className="form-control" id='vd' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Vaihtoehto E</label>
                    <input type="text" className="form-control" id='ve' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Oikea vastaus</label>
                    <input type="text" className="form-control" id='oikein' onChange={handleChange} />
                </div>
                <div className="form-group text-right mt-4">
                    <button onClick={handleSubmitClick} id="lisaaKysymys" className="btn btn-outline-primary m-1">Lisää kysymys</button>
                </div>
            </form>
        </div>
    )
}
