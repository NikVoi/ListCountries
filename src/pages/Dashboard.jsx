import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import NotFound from '../components/NotFound/NotFound'
import Pagination from '../components/Pagination/Pagination'
import { useTheme } from '../context/themeContext'
import useCountries from '../hooks/useCountries'
import styles from '../styles/Dashboard.module.scss'

const Dashboard = () => {
	const { darkMode } = useTheme()
	const { searchQuery } = useParams()

	const {
		items: currentItems,
		currentPage,
		totalPages,
		handlePageChange,
		searchResults,
	} = useCountries(searchQuery)

	const shouldShowPagination = totalPages > 1

	return (
		<section className={`${styles.dashboard} ${darkMode ? 'dark' : ''}`}>
			<Header />
			{searchQuery ? (
				searchResults.length > 0 ? (
					<List items={currentItems} />
				) : (
					<NotFound />
				)
			) : (
				<List items={currentItems} />
			)}
			{shouldShowPagination && (
				<Pagination
					item={currentPage}
					onclick={handlePageChange}
					total={totalPages}
				/>
			)}
		</section>
	)
}

export default Dashboard
