import { Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList.jsx'
import BookDetail from './pages/BookDetail.jsx'

const books = [ 
  {
    "id" : "692bc366458e20a260cda8aa",
    "date": {
      "$date": "2025-11-26T18:26:57Z"
    },
    "type": "expense",
    "amount": 15500,
    "category": "기타",
    "description": "씨유(CU) 구미송정힐"
  },
  {
    "id" : "692bc366458e20a260cda8ac",
    "date": {
      "$date": "2025-11-26T16:49:50Z"
    },
    "type": "income",
    "amount": 8,
    "category": "부수입",
    "description": "모두 다 캐시백"
  },
  {
    "id" : "692bc366458e20a260cda8ad",
    "date": {
      "$date": "2025-11-26T16:49:39Z"
    },
    "type": "expense",
    "amount": 1350,
    "category": "학교",
    "description": "금오공과대학교소비자"
  },

]

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookList books={books} />}/>
      <Route path="/book/:id" element={<BookDetail books={books}/>} />
    </Routes>
  )
}

export default App