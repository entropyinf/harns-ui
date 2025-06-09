import type { ReactNode } from 'react';
import { FaUsers } from 'react-icons/fa';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import DevicePage from '../pages/Device';
import Layout from '../pages/Layout';

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