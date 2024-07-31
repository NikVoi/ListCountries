import classNames from 'classnames'
import styles from './ButtonPagination.module.scss'

const ButtonPagination = ({ svg, text, onClick, active, disabled }) => {
	return (
		<button
			className={classNames(styles.button, { [styles.active]: active })}
			onClick={onClick}
			disabled={disabled}
		>
			{text} {svg}
		</button>
	)
}

export default ButtonPagination
