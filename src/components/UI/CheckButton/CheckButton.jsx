import { useEffect, useState } from 'react'
import { useTheme } from '../../../context/themeContext'
import styles from './CheckButton.module.scss'

const CheckButton = ({ onClick }) => {
	const { darkMode } = useTheme()
	const [isChecked, setIsChecked] = useState(darkMode)

	useEffect(() => {
		setIsChecked(darkMode)
	}, [darkMode])

	const handleClick = event => {
		setIsChecked(event.target.checked)
		if (onClick) {
			onClick(event)
		}
	}

	return (
		<div className={styles.toggle}>
			<label>
				<input
					type='checkbox'
					onClick={handleClick}
					checked={isChecked}
					className={styles.check}
				/>
				<span className={styles.slider}></span>
			</label>
		</div>
	)
}

export default CheckButton
