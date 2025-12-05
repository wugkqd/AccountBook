import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getBookDetail } from '../api/bookApi.js'

const BookDetail = () => {
	const { id } = useParams()
	
	const { data: book, isLoading, isError, error } = useQuery({
		queryKey: ['book', id],
		queryFn: () => getBookDetail(id)
	})

	if (isLoading) return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
			<div className="max-w-2xl mx-auto">
				<div className="bg-white rounded-2xl shadow-lg p-8 text-center">
					<p className="text-gray-600 text-lg">로딩 중...</p>
				</div>
			</div>
		</div>
	)

	if (isError || !book) return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
			<div className="max-w-2xl mx-auto">
				<div className="bg-white rounded-2xl shadow-lg p-8 text-center">
					<p className="text-gray-600 text-lg mb-4">
						{isError ? `오류: ${error?.message || '데이터를 불러올 수 없습니다.'}` : '해당 항목을 찾을 수 없습니다.'}
					</p>
					<Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
						목록으로 돌아가기
					</Link>
				</div>
			</div>
		</div>
	)

	const dateStr = book.date && book.date.$date ? new Date(book.date.$date).toLocaleString('ko-KR') : ''
	const amountStr = typeof book.amount === 'number' ? book.amount.toLocaleString() : book.amount
	const isIncome = book.type === 'income'

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
			<div className="max-w-2xl mx-auto">
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className={`p-6 ${isIncome ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'}`}>
						<h2 className="text-2xl font-bold text-white mb-2">가계부 상세</h2>
						<div className="flex items-center gap-2">
							<span className={`px-3 py-1 rounded-full text-sm font-semibold ${isIncome ? 'bg-white/20 text-white' : 'bg-white/20 text-white'}`}>
								{isIncome ? '수입' : '지출'}
							</span>
						</div>
					</div>
					
					<div className="p-8">
						<div className="space-y-6">
							<div className="border-b pb-4">
								<p className="text-sm text-gray-500 mb-1">금액</p>
								<p className={`text-4xl font-bold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
									{isIncome ? '+' : '-'}{amountStr}원
								</p>
							</div>
							
							<div className="grid grid-cols-2 gap-6">
								<div>
									<p className="text-sm text-gray-500 mb-1">카테고리</p>
									<p className="text-lg font-semibold text-gray-800">{book.category}</p>
								</div>
								<div>
									<p className="text-sm text-gray-500 mb-1">날짜</p>
									<p className="text-lg font-semibold text-gray-800">{dateStr}</p>
								</div>
							</div>
							
							<div>
								<p className="text-sm text-gray-500 mb-1">내용</p>
								<p className="text-lg text-gray-800">{book.description}</p>
							</div>
						</div>
						
						<div className="mt-8 pt-6 border-t">
							<Link to="/" className="inline-block w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center">
								← 목록으로 돌아가기
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookDetail