import axios from 'axios'

const api = axios.create({
  baseURL: 'https://account-book-u64a.onrender.com/api/books',
})

export const getBookList = async () => {
  const res = await api.get(``)
  return res.data
}

export const getBookDetail = async (id) => {
  const res = await api.get(`/${id}`)
  return res.data
}