import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/layout';
import { FileAxis3d, Mail, Network, Settings } from 'lucide-react';
import ThingTypePage from '../pages/thing-type'
import DevicePage from '../pages/device'

export type Route = {
  title?: string;
  Icon?: React.FunctionComponent,
  children?: Route[];
} & RouteObject

export const pages: Route[] = [
  {
    path: '/device',
    title: 'Devices',
    Icon: () => <Network />,
    element: <DevicePage />,
  },
  {
    path: '/thing-types',
    title: 'Thing types',
    Icon: () => <FileAxis3d />,
    element: <ThingTypePage />,
  },
  {
    path: '/configs',
    title: 'Configs',
    Icon: () => <Settings />,
    children: [
      {
        path: '/configs/mail',
        title: 'Email',
        Icon: () => <Mail />,
				element: <></>
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