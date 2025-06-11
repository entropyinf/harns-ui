import { lazy, type ReactNode } from 'react';
import { FaUsers } from 'react-icons/fa';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/Layout';
import { FaAmazon } from 'react-icons/fa6';

const DevicePage = lazy(() => import('../pages/Device'));
const ThingTypePage = lazy(() => import('../pages/ThingType'));

export type RichRouteObject = {
	title?: string;
	icon?: ReactNode,
	children?: RichRouteObject[];
} & RouteObject


export const pages: RichRouteObject[] = [
	{
		path: '/devices',
		title: 'Devices',
		icon: <FaUsers />,
		element: <DevicePage />,
	},
	{
		path: '/thingTypes',
		title: 'Thing Types',
		icon: <FaAmazon />,
		element: <ThingTypePage />,
	}
]

const routes: RichRouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: pages
	}
]

const router = createBrowserRouter(routes);

export default router;    