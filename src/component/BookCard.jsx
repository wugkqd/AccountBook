import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
	const dateStr = book?.date?.$date ? new Date(book.date.$date).toLocaleDateString('ko-KR') : ''
	const amountStr = typeof book?.amount === 'number' ? book.amount.toLocaleString() : (book?.amount ?? '')
	const sign = book?.type === 'income' ? '+' : book?.type === 'expense' ? '-' : ''
	const typeLabel = book?.type === 'income' ? '수입' : book?.type === 'expense' ? '지출' : (book?.type ?? '')
	const isIncome = book?.type === 'income'

	return (
		<Link to={`/book/${book.id}`} className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 mb-4 border border-gray-100 hover:scale-[1.02]">
			<div className="flex justify-between items-center">
				<div className="flex-1">
					<div className="flex items-center gap-3 mb-2">
						<span className="text-lg font-bold text-gray-800">{book.category}</span>
						<span className={`px-3 py-1 rounded-full text-xs font-semibold ${isIncome ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
							{typeLabel}
						</span>
					</div>
					<p className="text-gray-600 text-sm">{book.description}</p>
				</div>
				<div className="text-right ml-4">
					<p className={`text-2xl font-bold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
						{sign}{amountStr}
						<span className="text-sm ml-1">원</span>
					</p>
					<p className="text-gray-400 text-xs mt-1">{dateStr}</p>
				</div>
			</div>
		</Link>
	)
}