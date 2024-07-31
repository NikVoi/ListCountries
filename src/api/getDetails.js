import axios from 'axios'

const { VITE_BASE_URL } = import.meta.env

export const getDetails = async ({ id }) => {
	try {
		const response = await axios.get(`${VITE_BASE_URL}/name/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

		return response.data
	} catch (error) {
		throw new Error('Fetching data failed')
	}
}
