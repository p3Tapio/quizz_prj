import React from 'react'

export const Questions = ({ handleChange, handleSubmit }) => {
    return (
        <div className="col-lg-8 m-auto px-4 mt-4">
            <form id="nameDescription">
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
                    <input type="text" className="form-control" id='nimi' onChange={handleChange} />
                </div>
                <div className="form-group text-right mt-4">
                    <button id="tallennaKysely" className="btn btn-outline-primary m-1">Tallenna kysely</button>
                    <button onClick={handleSubmit} type="reset" id="lisaaKysymys" className="btn btn-outline-primary m-1">Lisää kysymys</button>
                </div>
            </form>
        </div>
    )
}
