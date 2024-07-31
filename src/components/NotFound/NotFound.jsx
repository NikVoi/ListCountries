import { useTheme } from '../../context/themeContext'
import styles from './NotFound.module.scss'

const NotFound = () => {
	const { darkMode } = useTheme()

	return (
		<section
			className={styles.NotFound + ` ${darkMode === true ? 'dark' : ''} `}
		>
			404 NotFound page
		</section>
	)
}

export default NotFound
