import React, { memo } from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './Input.module.scss'

const Input = ({ type = 'text', value, placeholder, onChange, onKeyDown }) => {
	return (
		<div className={styles.block}>
			<div className={styles.svg}>
				<IoSearch />
			</div>
			<input
				className={styles.input}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
		</div>
	)
}

export default memo(Input)
