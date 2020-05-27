import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NameDescription } from '../Components/UserPage/NameDescription '
import { Questions } from '../Components/UserPage/Questions';
import { getUser, getToken } from '../Components/Common/Auth/Sessions'
import axios from 'axios'

// TODO .. tallennus eka arrayhyn tjsp jottei synny blankko tietovisoja ilman kysymyksiä yms.

const CreateNewQuizz = () => {

    const [nimi, setNimi] = useState('')
    const [kuvaus, setKuvaus] = useState('')
    const [kesto, setKesto] = useState(60)
    const [kohta, setKohta] = useState(0)
    const [quizzId, setQuizzId] = useState()
    const [kysykset, setKysymyset] = useState(0)
    const [kysymys, setKysymys] = useState('')
    const [oikein, setOikein] = useState('')
    const [va, setVa] = useState(null)
    const [vb, setVb] = useState(null)
    const [vc, setVc] = useState(null)
    const [vd, setVd] = useState(null)
    const [ve, setVe] = useState(null)

    const handleChange = (ev) => {

        if (ev.target.id === 'nimi') setNimi(ev.target.value)
        else if (ev.target.id === 'kuvaus') setKuvaus(ev.target.value)
        else if (ev.target.id === 'kysymys') setKysymys(ev.target.value)
        else if (ev.target.id === 'kesto') setKesto(ev.target.value)
        else if (ev.target.id === 'va') setVa(ev.target.value)
        else if (ev.target.id === 'vb') setVb(ev.target.value)
        else if (ev.target.id === 'vc') setVc(ev.target.value)
        else if (ev.target.id === 'vd') setVd(ev.target.value)
        else if (ev.target.id === 've') setVe(ev.target.value)
        else if (ev.target.id === 'oikein') setOikein(ev.target.value)
    }
        // TODO: siirrä tsekkaukset formien puolelle, nyt kentät tyhjenee myös ennen tallennusta vaikka se ei onnistuisi
    const handleFirstSubmit = (ev) => {

        ev.preventDefault()

        if (ev.target.id === 'nameDescription') {
            if (nimi !== '' && kuvaus !== '') {

                const id = getUser().id
                const token = getToken()

                const config = { headers: { 'Content-Type': 'application/json' } }
                if (token) config.headers['Authorization'] = `Token ${token}`
                const body = JSON.stringify({ name: nimi, description: kuvaus, timer_secs: kesto, owner: id })

                axios.post('http://localhost:8000/api/quizzes/', body, config)
                    .then(res => {
                        alert("Tietovisa tallennettu!")
                        setQuizzId(res.data.id)
                    })
                    .catch(err => console.log('err.response.data', err.response.data))

                setKohta(1)

            } else alert("Anna visailulle ainakin nimi ja kuvaus!")
        }
    }
    const handleQSubmit = (id) => {
        if (id === 'lisaaKysymys') {
            console.log('va', va)
            console.log('oikein', oikein)
            console.log('quizzId', quizzId)
            if (kysymys !== null && va !== null && vb !== null && oikein !== '') {

                const token = getToken()

                const config = { headers: { 'Content-Type': 'application/json' } }
                if (token) config.headers['Authorization'] = `Token ${token}`

                const body = JSON.stringify({
                    question: kysymys,
                    option_a: va,
                    option_b: vb,
                    option_c: vc,
                    option_d: vd,
                    option_e: ve,
                    correct_option: oikein.toLowerCase(),
                    quizz_id: quizzId
                })

                axios.post('http://localhost:8000/api/questions/', body, config)
                    .then(() => {
                        alert("Kysymys tallennettu!")
                        setKysymyset(kysykset + 1)
                    })
                    .catch(err => console.log('err.response.data', err.response.data))
            }
            else alert("Anna kysymys, sille edes kaksi vastausvaihtoehtoa ja oikea vastaus!")
        }

    }

    const msg = !kohta
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
                    {!kohta ? <NameDescription handleChange={handleChange} handleFirstSubmit={handleFirstSubmit} />
                        : <Questions handleChange={handleChange} handleQSubmit={handleQSubmit} />}
                </div>
            </div>
        </div>
    )
}
// Uusi on http://localhost:8000/api/quizzes/ POST jaa bodyssä JSON (name,description, timer, mites owner hmm? ks r/django/tut)
export default CreateNewQuizz



                // header kuten yllä 
                // { POST http://localhost:8000/api/questions/
                //     "question": "testi kysmys?",
                //     "option_a": "Joo",
                //     "option_b": "Ei",
                //     "option_c": null,
                //     "option_d": null,
                //     "option_e": null,
                //     "correct_option": "d",
                //     "quizz_id": 1
                // }
