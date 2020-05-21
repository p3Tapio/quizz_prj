import axios from 'axios'
const url = 'http://localhost:8000/api/'

const getQuizzes = () => axios.get(`${url}quizzes/`).then(res => res.data)
const getQuizz = (id) =>  axios.get(`${url}quizzes/${id}`).then(res => res.data)
export default {getQuizzes, getQuizz}
// const url = 'http://localhost:3001/persons'

// const create = newPerson => axios.post(url, newPerson).then(res => res.data)
// const read = () => axios.get(url).then(res => res.data)
// const update = (id, newPerson) => axios.put(`${url}/${id}`, newPerson)
// const del = id => axios.delete(`${url}/${id}`)

// export default { create, read, update, del }