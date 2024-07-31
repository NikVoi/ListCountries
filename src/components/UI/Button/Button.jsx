import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ text, onClick, svg, lickImg, disabled, active }) => {
	return (
		<button
			className={classNames(styles.button, { [styles.active]: active })}
			onClick={onClick}
			disabled={disabled}
		>
			{svg} {text} {lickImg && <img src={lickImg} />}
		</button>
	)
}

export default Button
