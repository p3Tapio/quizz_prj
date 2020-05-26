import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NameDescription } from '../Components/UserPage/NameDescription '
import { Questions } from '../Components/UserPage/Questions';
const CreateNewQuizz = () => {

    const [nimi, setNimi] = useState('')
    const [kuvaus, setKuvaus] = useState('')
    const [kesto, setKesto] = useState()
    const [kohta, setKohta] = useState()
    const [kysykset, setKysymyset] = useState([])
    const [kysymys, setKysymys] = useState('')
    const [va, setVa] = useState('')
    const [vb, setVb] = useState('')
    const [vc, setVc] = useState('')
    const [vd, setVd] = useState('')
    const [ve, setVe] = useState('')

    const handleChange = (ev) => {

        if (ev.target.id === 'nimi') setNimi(ev.target.value)
        else if (ev.target.id === 'kuvaus') setKuvaus(ev.target.value)
        else if (ev.target.id === 'kesto') setKesto(ev.target.value)
        else if (ev.target.id === 'va') setVa(ev.target.value)
        else if (ev.target.id === 'vb') setVb(ev.target.value)
        else if (ev.target.id === 'vc') setVc(ev.target.value)
        else if (ev.target.id === 'vd') setVd(ev.target.value)
        else if (ev.target.id === 've') setVe(ev.target.value)


    }
    // Tee omat handlerit kysymyksille ! 
    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('ev.target.id (submit)', ev.target.id)
        setKohta(1)
        if (ev.target.id === 'nameDescription') {
            if (nimi !== '' && kuvaus !== '') {
                setKohta(1)
            } else alert("Anna visailulle ainakin nimi ja kuvaus!")
        } else if (ev.target.id === 'lisaaKysymys') {
            
        }
     
        console.log('kohta', kohta)
    }

    const msg = kohta === 0
        ? "Voit luoda uuden tietokilpailun antamalla sille ensin nimen, kuvauksen ja visailun keston sekunneissa. Paina tallenna näppäintä, kun olet valmis"
        : "Lisää tietovisaan kysymys ja anna sille vähintään kaksi mahdollista vastausvaihtoehtoa."

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <h2 className="mt-4 focus-in-expand">Luo uusi visailu</h2>
                    <Link to="/userpage" className="link">Palaa takaisin omalle sivulle</Link>
                    <hr />
                    <p className="mt-2 jumbopara mb-4">{msg}</p>
                    {!kohta ? <NameDescription handleChange={handleChange} handleSubmit={handleSubmit} />
                        : <Questions handleChange={handleChange} handleSubmit={handleSubmit} />}
                </div>
            </div>
        </div>
    )
}
// Uusi on http://localhost:8000/api/quizzes/ POST jaa bodyssä JSON (name,description, timer, mites owner hmm? ks r/django/tut)
export default CreateNewQuizz