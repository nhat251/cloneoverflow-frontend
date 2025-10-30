import classNames from 'classnames/bind';
import styles from './NavList.module.scss';
import NavItem from './NavItem';

const cx = classNames.bind(styles);

interface INavItem {
  path: string;
  text: string;
}

interface INavListProps {
  list: INavItem[];
}

function NavList({ list }: INavListProps) {
  return (
    <ul className={cx('navbar')}>
      {list.map((item, index) => (
        <NavItem key={index} path={item.path}>
          {item.text}
        </NavItem>
      ))}
    </ul>
  );
}

export default NavList;
