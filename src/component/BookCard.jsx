import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
	const dateStr = book?.date?.$date ? new Date(book.date.$date).toLocaleDateString('ko-KR') : ''
	const amountStr = typeof book?.amount === 'number' ? book.amount.toLocaleString() : (book?.amount ?? '')
	const sign = book?.type === 'income' ? '+' : book?.type === 'expense' ? '-' : ''
	const typeLabel = book?.type === 'income' ? '수입' : book?.type === 'expense' ? '지출' : (book?.type ?? '')

	return (
		<Link to={`/book/${book.id}`} style={{display: 'block', padding: 12, borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit'}}>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<div>
					<div style={{fontWeight: 600}}>{book.category} <span style={{fontWeight: 400, color: '#666', marginLeft: 8}}>{typeLabel}</span></div>
					<div style={{color: '#666', fontSize: 13}}>{book.description}</div>
				</div>
				<div style={{textAlign: 'right'}}>
					<div style={{fontWeight: 700, color: book?.type === 'income' ? 'green' : 'red'}}>{sign}{amountStr}원</div>
					<div style={{color: '#666', fontSize: 12}}>{dateStr}</div>
				</div>
			</div>
		</Link>
	)
}