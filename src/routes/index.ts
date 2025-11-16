import Button from '~/components/commons/Button';
// import { DefaultLayout, HeaderOnlyLayout } from '~/layouts';
import { Home } from '~/pages';
import Message from '~/pages/Message';

import { RouteObject } from '~/types/';

// public routes
const publicRoutes: RouteObject[] = [
  { path: '/', component: Home },
  { path: '/document', component: Button },
  { path: '/membership', component: Button },
  { path: '/coursera', component: Button },
  { path: '/shop', component: Button },
  { path: '/direct-message', component: Message },
  { path: '/account/alerts', component: Button },
];

const privateRoutes: RouteObject[] = [];

export { publicRoutes, privateRoutes };
