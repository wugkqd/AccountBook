import { Routes, Route } from 'react-router-dom'
// import { useState, useEffect, use } from 'react'
import { useQuery } from '@tanstack/react-query'
import BookList from './pages/BookList.jsx'
import BookDetail from './pages/BookDetail.jsx'
import { getBookList } from './api/bookApi.js'

function App() {
  const { data: books, isLoading, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: getBookList,
  })
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">로딩 중...</div>
  }

  if (isError) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>
  }

  return (
    <Routes>
      <Route path="/" element={<BookList books={books} />}/>
      <Route path="/book/:id" element={<BookDetail books={books}/>} />
    </Routes>
  )
}

export default App