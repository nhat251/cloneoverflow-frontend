import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import NavList from '~/components/commons/NavList';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('header-inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src="https://data.fuoverflow.com/assets/logo/FUO.webp" alt="logo" />
          </Link>
        </div>
        <NavList />
      </div>
    </header>
  );
}

export default Header;
