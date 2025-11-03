import { type PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './NavList.module.scss';
import { NavComponentProps } from '~/types';

const cx = classNames.bind(style);

function NavItem({ path, children }: PropsWithChildren<NavComponentProps>) {
  return (
    <li>
      <NavLink to={path} className={({ isActive }) => (isActive ? cx('active') : '')}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
