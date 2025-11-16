import classNames from 'classnames/bind';
import styles from './NavList.module.scss';
import NavItem from './NavItem';
import Menu from '~/components/Popper/Menu';
import { ReactNode } from 'react';
import { IMenuItem } from '~/types/Menu';

const cx = classNames.bind(styles);
interface IUser {
  username: string;
  avatar: string;
}

interface INavItem {
  to: string;
  title?: string;
  icon?: ReactNode;
  user?: IUser;
  menu?: IMenuItem[];
}

interface INavListProps {
  list: INavItem[];
}

function NavList({ list }: INavListProps) {
  return (
    <nav className={cx('navbar')}>
      {list.map((item, index) => {
        const hasMenu = Array.isArray(item.menu);

        const navItem = (
          <NavItem
            key={index}
            to={item.to}
            icon={item.icon}
            title={item.title ?? item.user?.username}
            img={item.user?.avatar}
          />
        );

        if (!hasMenu) return navItem;

        return (
          <Menu items={item.menu ?? []}>
            {navItem}
          </Menu>
        );
      })}
    </nav>
  );
}

export default NavList;
