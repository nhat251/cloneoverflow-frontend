import styles from './UserProfile.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useAuth } from '~/hooks';
import images from '~/assets/images';
import { useState } from 'react';
import PopperWrapper from '~/components/Popper/Wrapper';
import NavItem from '~/components/commons/NavList/NavItem';
import { BellIcon, EnvelopeIcon, MoneyIcon, SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function UserProfile() {
  const { user } = useAuth();
  const [isShowTippy, setIsShowTippy] = useState<boolean>(false);
  return (
    <>
      <Tippy
        interactive
        visible={isShowTippy}
        placement="auto"
        hideOnClick={true}
        render={(attrs) => (
          <div className={cx('menu')} tabIndex={-1} {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              <div className={cx('menu-header')}>Tài khoản của bạn</div>
              <div className={cx('menu-body')}>
                <div className={cx('main-profile')}>
                  <div className={cx('user-avatar')}>
                    <img src={images.defaultAvatar} />
                  </div>
                  <span className={cx('full-name')}>{user?.fullName}</span>
                </div>
              </div>
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('user-info')}>
          <div className={cx('username-block')} onClick={() => setIsShowTippy((prev) => !prev)}>
            <img src={images.logo} alt="avt" />
            <p>{user?.fullName}</p>
          </div>
        </div>
      </Tippy>
      <NavItem icon={<EnvelopeIcon />} to={'/direct-message'} />
      <NavItem icon={<BellIcon />} to={'/account/alerts'} />
      <NavItem icon={<MoneyIcon />} to={'/dbtech-credits'} />
      <NavItem icon={<SearchIcon />} to={'/search'} />
    </>
  );
}

export default UserProfile;
