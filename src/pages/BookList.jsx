import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard.jsx'

export default function BookList({books}) {
	return (
		<>
			{books.map(book => (
				<BookCard key={book.id} book={book}/>
			))}
		</>
	)
}