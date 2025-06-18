import { lazy, type ReactNode } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/layout';

const DevicePage = lazy(() => import('../pages/device'));
const ThingTypePage = lazy(() => import('../pages/thing-type'));

export type Route = {
	title?: string;
	icon?: ReactNode,
	children?: Route[];
} & RouteObject

export const pages: Route[] = [
	{
		path: '/devices',
		title: 'Devices',
		icon: <></>,
		element: <DevicePage />,
	},
	{
		path: '/thingTypes',
		title: 'Thing Types',
		icon: <></>,
		element: <ThingTypePage />,
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