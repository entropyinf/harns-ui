import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from '../pages/layout';
import { FileAxis3d, Mail, Network, Settings, Webcam } from 'lucide-react';

const DevicePage = lazy(() => import('../pages/device'));
const ThingTypePage = lazy(() => import('../pages/thing-type'));

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