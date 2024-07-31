import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { DETAILS_PAGE } from '../../constant/navConstants'
import Button from '../UI/Button/Button'
import styles from './List.module.scss'

const List = ({ items }) => {
	const navigate = useNavigate()

	const handleClick = id => {
		navigate(`${DETAILS_PAGE}/${id}`)
	}

	return (
		<section className={styles.list}>
			{items.map((item, index) => (
				<div
					className={styles.item}
					key={index}
					onClick={() => handleClick(`${item.name.common}`)}
				>
					<div className={styles.flag}>
						<img src={item.flags.png} alt={item.name.common} />
					</div>

					<div className={styles.name}>{item.name.common}</div>

					<Button svg={<FaArrowRight />} />
				</div>
			))}
		</section>
	)
}

export default List
