import { LINK_TEXT, NOT_INFO } from '../../constant/appConstants'
import styles from './DetailsInfo.module.scss'

const DetailsInfo = ({ item }) => {
	const renderLanguages = langs => {
		if (!langs) return NOT_INFO
		return Object.values(langs).join(', ')
	}

	return (
		<section className={styles.details}>
			<div className={styles.page}>
				<img src={item.flags?.png} alt={item.name?.common || 'Flag'} />
			</div>

			<div className={styles.info}>
				<h1>{item.name?.common || NOT_INFO}</h1>
				<p>
					<span>Capital:</span> {item.capital ? item.capital[0] : NOT_INFO}{' '}
					{item.capital && item.maps?.googleMaps && (
						<a href={item.maps.googleMaps} target='_blank'>
							{LINK_TEXT}
						</a>
					)}
				</p>
				<p>
					<span>Region:</span> {item.region || NOT_INFO}
				</p>
				<p>
					<span>Population:</span> {item.population || NOT_INFO}
				</p>
				<p>
					<span>Area:</span> {item.area ? `${item.area} km²` : NOT_INFO}
				</p>
				<p>
					<span>Continents:</span>{' '}
					{item.continents ? item.continents.join(', ') : NOT_INFO}
				</p>
				<p>
					<span>Languages:</span> {renderLanguages(item.languages)}
				</p>
				<p>
					<span>Timezones:</span>{' '}
					{item.timezones ? item.timezones.join(', ') : NOT_INFO}
				</p>
			</div>
		</section>
	)
}

export default DetailsInfo
