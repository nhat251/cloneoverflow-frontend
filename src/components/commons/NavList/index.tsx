import classNames from 'classnames/bind';
import styles from './NavList.module.scss';

import NavLi from './NavLi';
const cx = classNames.bind(styles);

function NavComponent() {
  return (
    <ul className={cx('navbar')}>
      <NavLi path="/forum">Diễn đàn</NavLi>
      <NavLi path="/document">Tài liệu</NavLi>
      <NavLi path="/membership">Thành viên trả phí</NavLi>
      <NavLi path="/coursera">Dịch vụ coursera</NavLi>
      <NavLi path="/shop">Shop</NavLi>
    </ul>
  );
}

export default NavComponent;
