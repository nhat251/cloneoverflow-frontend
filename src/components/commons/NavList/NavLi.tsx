import { type PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import INavComponentProps from '~/types/INavComponentProps.ts';

function NavLi({ path, children }: PropsWithChildren<INavComponentProps>) {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
}

export default NavLi;
