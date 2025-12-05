import { useParams, Link } from 'react-router-dom'

const BookDetail = ({ books }) => {
	const { id } = useParams()
	const book = books?.find(b => b.id === id)

	if (!book) return (
		<div>
			<p>해당 항목을 찾을 수 없습니다.</p>
			<Link to="/">목록으로 돌아가기</Link>
		</div>
	)

	const dateStr = book.date && book.date.$date ? new Date(book.date.$date).toLocaleString('ko-KR') : ''
	const amountStr = typeof book.amount === 'number' ? book.amount.toLocaleString() : book.amount

	return (
		<div>
			<h2>가계부 상세</h2>
			<p><strong>날짜:</strong> {dateStr}</p>
			<p><strong>유형:</strong> {book.type === 'income' ? '수입' : book.type === 'expense' ? '지출' : book.type}</p>
			<p><strong>금액:</strong> {amountStr}원</p>
			<p><strong>카테고리:</strong> {book.category}</p>
			<p><strong>내용:</strong> {book.description}</p>
			<Link to="/">목록으로</Link>
		</div>
	)
}

export default BookDetail