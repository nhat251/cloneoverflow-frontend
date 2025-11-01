import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/commons/Button';
import NavList from '~/components/commons/NavList';
import { useState } from 'react';
import LoginModal from '~/components/modals/LoginModal';

const cx = classNames.bind(styles);

function Header() {
  const navArray = [
    { path: '/forum', text: 'Diễn đàn' },
    { path: '/document', text: 'Tài liệu' },
    { path: '/membership', text: 'Thành viên trả phí' },
    { path: '/coursera', text: 'Dịch vụ coursera' },
    { path: '/shop', text: 'Shop' },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <Button primary className={cx('custom-login')} onClick={() => setIsOpen(true)}>
            Log in
          </Button>
          <Button outline className={cx('custom-register')} onClick={() => setIsOpen(true)}>
            Register
          </Button>
          {isOpen && <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
      </header>
    </div>
  );
}

export default Header;
