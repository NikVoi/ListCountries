import { useEffect, useState } from 'react'
import { GetCountries } from '../api/GetCountries'
import { ITEMS_PER_PAGE } from '../constant/appConstants'

const useCountries = searchQuery => {
	const [items, setItems] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [searchResults, setSearchResults] = useState([])
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		const getItems = async () => {
			try {
				const data = await GetCountries()
				setItems(data)
				if (searchQuery) {
					const results = data.filter(item =>
						item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
					)
					setSearchResults(results)
					setTotalPages(Math.ceil(results.length / ITEMS_PER_PAGE))
				} else {
					setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE))
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		getItems()
	}, [searchQuery])

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE

	const currentItems = searchQuery
		? searchResults.slice(startIndex, endIndex)
		: items.slice(startIndex, endIndex)

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	return {
		items: currentItems,
		currentPage,
		totalPages,
		handlePageChange,
		searchResults,
	}
}

export default useCountries
