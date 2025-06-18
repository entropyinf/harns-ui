import { lazy, type ReactNode } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/layout';
import { FaTemperatureEmpty } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";

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
		title: '采集设备',
		icon: <FaTemperatureEmpty/>,
		element: <DevicePage />,
	},
	{
		path: '/thingTypes',
		title: '物类型',
		icon: <FaComputer/>,
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