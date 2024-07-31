import { GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'
import ButtonPagination from '../UI/ButtonPagination/ButtonPagination'
import styles from './Pagination.module.scss'

const Pagination = ({ item, onclick, total }) => {
	return (
		<section className={styles.pagination}>
			<ButtonPagination
				svg={<GrFormPrevious />}
				onClick={() => onclick(item - 1)}
				disabled={item === 1}
			/>

			{Array.from({ length: total }, (_, index) => (
				<ButtonPagination
					key={index}
					onClick={() => onclick(index + 1)}
					text={index + 1}
					active={item === index + 1}
				/>
			))}

			<ButtonPagination
				svg={<MdNavigateNext />}
				onClick={() => onclick(item + 1)}
				disabled={item === total}
			/>
		</section>
	)
}

export default Pagination
