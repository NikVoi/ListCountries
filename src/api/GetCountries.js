import axios from 'axios'

const { VITE_BASE_URL } = import.meta.env

export const GetCountries = async () => {
	try {
		const response = await axios.get(`${VITE_BASE_URL}/all`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return response.data
	} catch (error) {
		throw new Error('Fetching data failed')
	}
}
