import { type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { INavComponentProps } from '~/types/INavComponentPros';

function NavItem({ path, children }: PropsWithChildren<INavComponentProps>) {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
}

export default NavItem;
