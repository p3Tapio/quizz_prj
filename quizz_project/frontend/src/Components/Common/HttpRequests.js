import axios from 'axios'
const url = 'http://localhost:8000/api/'

const getQuizzes = () => axios.get(`${url}quizzes/`).then(res => res.data)
const getQuizz = (id) => axios.get(`${url}quizzes/${id}`).then(res => res.data)
const getQuestions = (id) => axios.get(`${url}questions/?quizz_id=${id}`).then(res => res.data)

export default { getQuizzes, getQuizz, getQuestions }
