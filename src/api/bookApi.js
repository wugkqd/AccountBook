import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api/books',
})

export const getBookList = async () => {
  const res = await api.get(``)
  return res.data
}

export const getBookDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}