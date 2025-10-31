import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/commons/Button';
import images from '~/assets/images';
import { useState } from 'react';
import LoginPopup from '~/components/Popup/LoginPopup';

const cx = classNames.bind(styles);

function Header() {
  const [isOpenLoginPopup, setIsLoginPopup] = useState<boolean>(false);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="cloneoverflow" />
        </div>

        <div className={cx('actions')}>
          <Button primary className={cx('custom-login')} onClick={() => setIsLoginPopup(true)}>
            Log in
          </Button>
          <Button outline className={cx('custom-register')}>
            Register
          </Button>
          {isOpenLoginPopup && <LoginPopup isOpen={isOpenLoginPopup} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
