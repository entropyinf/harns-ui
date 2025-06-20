import { lazy } from 'react';
import { FaComputer, FaMailchimp, FaSellcast, FaTemperatureEmpty } from "react-icons/fa6";
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/layout';

const DevicePage = lazy(() => import('../pages/device'));
const ThingTypePage = lazy(() => import('../pages/thing-type'));

export type Route = {
	title?: string;
	Icon?: React.FunctionComponent,
	children?: Route[];
} & RouteObject

export const pages: Route[] = [
	{
		path: '/collect',
		title: 'Collecting',
		Icon: () => <FaTemperatureEmpty />,
		children: [
			{
				path: '/collect/devices',
				title: 'Devices',
				Icon: () => <FaTemperatureEmpty />,
				element: <DevicePage />,
			}
		]
	},
	{
		path: '/models',
		title: 'Modeling',
		Icon: () => <FaComputer />,
		children: [
			{
				path: '/models/thing-types',
				title: 'Thing types',
				Icon: () => <FaComputer />,
				element: <ThingTypePage />,
			}
		]
	},
	{
		path: '/configs',
		title: 'Configs',
		Icon: () => <FaSellcast />,
		children: [
			{
				path: '/configs/mail',
				title: 'Email',
				Icon: () => <FaMailchimp />,
			}
		]
	}
]

const routes: Route[] = [
	{
		path: '/',
		element: <Layout />,
		children: pages
	}
]

const router = createBrowserRouter(routes);

export default router;    