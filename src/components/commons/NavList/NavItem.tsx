import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './NavList.module.scss';
import { NavComponentProps } from '~/types';
import Image from '../Image';

const cx = classNames.bind(style);

function NavItem({ title, icon, to, img }: NavComponentProps) {
  return (
    <li>
      <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to={to}>
        {icon && <span className={cx('icon')}>{icon}</span>}
        {img && <Image className={cx('avatar')} src={img} />}
        <span className={cx('title')}>{title}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
