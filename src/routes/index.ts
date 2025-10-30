import Button from '~/components/commons/Button';
import { DefaultLayout, HeaderOnlyLayout } from '~/components/layouts';

import { type IRoute } from '~/types/IRoute';

// public routes
const publicRoutes: IRoute[] = [
  { path: '/', component: Button },
  { path: '/forum', component: Button },
  { path: '/document', component: Button },
  { path: '/membership', component: Button },
  { path: '/coursera', component: Button },
  { path: '/shop', component: Button },
];

const privateRoutes: IRoute[] = [];

export { publicRoutes, privateRoutes };
