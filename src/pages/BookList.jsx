import { Link } from 'react-router-dom'
import BookCard from '../component/BookCard.jsx'

export default function BookList({books}) {
	const totalIncome = books.filter(b => b.type === 'income').reduce((sum, b) => sum + b.amount, 0)
	const totalExpense = books.filter(b => b.type === 'expense').reduce((sum, b) => sum + b.amount, 0)
	const balance = totalIncome - totalExpense

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-4xl mx-auto p-6">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-gray-800 mb-6">💰 가계부</h1>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
							<p className="text-sm text-gray-500 mb-1">잔액</p>
							<p className="text-2xl font-bold text-blue-600">{balance.toLocaleString()}원</p>
						</div>
						<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
							<p className="text-sm text-gray-500 mb-1">총 수입</p>
							<p className="text-2xl font-bold text-green-600">+{totalIncome.toLocaleString()}원</p>
						</div>
						<div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
							<p className="text-sm text-gray-500 mb-1">총 지출</p>
							<p className="text-2xl font-bold text-red-600">-{totalExpense.toLocaleString()}원</p>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">거래 내역</h2>
					{books.length === 0 ? (
						<div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
							거래 내역이 없습니다.
						</div>
					) : (
						books.map(book => (
							<BookCard key={book.id} book={book}/>
						))
					)}
				</div>
			</div>
		</div>
	)
}