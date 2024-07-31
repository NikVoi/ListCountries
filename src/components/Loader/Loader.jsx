import { useTheme } from '../../context/themeContext'
import styles from './Loader.module.scss'

const Loader = () => {
	const { darkMode } = useTheme()

	return (
		<section className={styles.loader + ` ${darkMode === true ? 'dark' : ''} `}>
			<span className={styles.item}></span>
		</section>
	)
}

export default Loader
