import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../constant/appConstants'
import { DASHBOARD_PAGE } from '../../constant/navConstants'
import { useTheme } from '../../context/themeContext'
import Button from '../UI/Button/Button'
import CheckButton from '../UI/CheckButton/CheckButton'
import Input from '../UI/Input/Input'
import styles from './Header.module.scss'

const Header = () => {
	const navigate = useNavigate()
	const { toggleTheme } = useTheme()
	const [searchQuery, setSearchQuery] = useState('')

	const handleHome = () => {
		navigate(`/`)
	}

	const handleSearchChange = e => {
		setSearchQuery(e.target.value)
	}

	const handleSearchSubmit = () => {
		if (searchQuery.trim()) {
			navigate(`${DASHBOARD_PAGE}${searchQuery.trim()}`)
		}
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handleSearchSubmit()
			setSearchQuery('')
		}
	}

	return (
		<section className={styles.header}>
			<Button lickImg={LOGO} onClick={handleHome} />
			<Input
				placeholder={'Search'}
				value={searchQuery}
				onChange={handleSearchChange}
				onKeyDown={handleKeyDown}
			/>
			<CheckButton onClick={toggleTheme} />
		</section>
	)
}

export default Header
