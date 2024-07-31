import { createBrowserRouter } from 'react-router-dom'
import { DASHBOARD_PAGE, DETAILS_PAGE } from './constant/navConstants'
import { default as Dashboard } from './pages/Dashboard'
import Details from './pages/Details'

export const routes = [
	{
		path: `${DASHBOARD_PAGE}`,
		element: <Dashboard />,
	},
	{
		path: `${DASHBOARD_PAGE}/:searchQuery/`,
		element: <Dashboard />,
	},
	{
		path: `${DETAILS_PAGE}/:id`,
		element: <Details />,
	},
]

export const router = createBrowserRouter(routes)
