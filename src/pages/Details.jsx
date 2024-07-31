import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetails } from '../api/getDetails'
import DetailsInfo from '../components/DetailsInfo/DetailsInfo'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import { useTheme } from '../context/themeContext'
import styles from '../styles/Details.module.scss'

const Details = () => {
	const { darkMode } = useTheme()

	const { id } = useParams()
	const [item, setItem] = useState()

	useEffect(() => {
		const getItem = async () => {
			try {
				const data = await getDetails({ id })
				setItem(data[0])
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		getItem()
	}, [])

	if (!item) {
		return <Loader />
	}

	return (
		<section className={`${styles.details} ${darkMode ? 'dark' : ''}`}>
			<Header />
			<DetailsInfo item={item} />
		</section>
	)
}

export default Details
