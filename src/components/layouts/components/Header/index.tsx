import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/commons/Button';
import NavList from '~/components/commons/NavList';

const cx = classNames.bind(styles);

function Header() {
  const navArray = [
    { path: '/forum', text: 'Diễn đàn' },
    { path: '/document', text: 'Tài liệu' },
    { path: '/membership', text: 'Thành viên trả phí' },
    { path: '/coursera', text: 'Dịch vụ coursera' },
    { path: '/shop', text: 'Shop' },
  ];

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="cloneoverflow" />
          </Link>
        </div>
        <NavList list={navArray} />
        <div className={cx('actions')}>
          <Button primary className={cx('custom-login')}>
            Log in
          </Button>
          <Button outline className={cx('custom-register')}>
            Register
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Header;
