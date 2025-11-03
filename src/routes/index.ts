import Button from '~/components/commons/Button';
import { DefaultLayout, HeaderOnlyLayout } from '~/layouts';
import { Home } from '~/components/pages';

import { RouteObject } from '~/types/';

// public routes
const publicRoutes: RouteObject[] = [
  { path: '/', component: Home },
  { path: '/document', component: Button },
  { path: '/membership', component: Button },
  { path: '/coursera', component: Button },
  { path: '/shop', component: Button },
];

const privateRoutes: RouteObject[] = [];

export { publicRoutes, privateRoutes };
