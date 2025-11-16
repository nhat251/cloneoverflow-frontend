import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/commons/Button';
import NavList from '~/components/commons/NavList';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '~/hooks';
// import UserProfile from '../UserProfile';
import {
  AwardIcon,
  BellIcon,
  CourseraServiceIcon,
  DocumentIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeIconSlash,
  ForumIcon,
  IdBadgeIcon,
  MoneyIcon,
  PaidMembershipIcon,
  SearchIcon,
  SearchPlusIcon,
  ShopIcon,
  UserIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
  const navArrayLeft = [
    {
      to: '/',
      title: 'Diễn đàn',
      icon: <ForumIcon />,
      menu: [
        {
          title: 'Bài mới',
          to: '/whats-new',
          icon: <SearchPlusIcon />,
        },
        {
          to: '/find-threads',
          title: 'Tìm chủ đề',
          icon: <SearchIcon />,
        },
        {
          to: '/find-threads',
          title: 'Chủ đề của bạn',
          icon: <UserIcon />,
          indent: true,
        },
        {
          to: '/watched',
          title: 'Đã theo dõi',
          icon: <EyeIcon />,
          separate: true,
        },
        {
          to: '/search',
          title: 'Tìm trong diễn đàn',
          icon: <SearchIcon />,
        },
        {
          title: 'đánh dấu đã đọc',
          icon: <EyeIconSlash />,
        },
        {
          to: '/award-system',
          title: 'Danh Hiệu',
          icon: <AwardIcon />,
        },
        {
          to: '/award-system',
          title: 'Danh Hiệu của bạn',
          icon: <IdBadgeIcon />,
        },
        {
          to: '/members',
          title: 'Thành Viên',
          icon: <UserIcon />,
          separate: true,
        },
      ],
    },
    {
      to: '/document',
      title: 'Tài liệu',
      icon: <DocumentIcon />,
      menu: [
        {
          to: '/categories/subjects',
          title: 'Đề thi các kì trước',
          icon: <AwardIcon />,
        },
        {
          to: '/resources',
          title: 'Giáo trình - Slide - Code mẫu',
          icon: <AwardIcon />,
        },
        {
          to: '/search',
          title: 'Tìm tài liệu',
          icon: <AwardIcon />,
        },
        {
          to: '/resources/authors',
          title: 'Tài liệu của tôi',
          icon: <AwardIcon />,
        },
        {
          to: '/watched/resources',
          title: 'Đã xem',
          icon: <AwardIcon />,
        },
        {
          to: '/watched/media',
          title: 'Đang theo dõi',
          icon: <AwardIcon />,
        },
      ],
    },
    { to: '/membership', title: 'Thành viên trả phí', icon: <PaidMembershipIcon /> },
    { to: '/coursera', title: 'Dịch vụ coursera', icon: <CourseraServiceIcon /> },
    { to: '/shop', title: 'Shop', icon: <ShopIcon /> },
  ];

  const navArrayRight = [
    {
      to: '/@khangdn6',
      user: {
        username: 'khangdn6',
        avatar: images.defaultAvatar,
      },
    },
    { to: '/direct-message', icon: <EnvelopeIcon /> },
    { to: '/account/alerts', icon: <BellIcon /> },
    { to: '/dbtech-credits', icon: <MoneyIcon /> },
    { to: '/search', icon: <SearchIcon /> },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useAuth();
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="cloneoverflow" />
          </Link>
        </div>
        <NavList list={navArrayLeft} />
        <div className={cx('actions')}>
          {user ? (
            <NavList list={navArrayRight} />
          ) : (
            <>
              <Button primary className={cx('custom-login')} onClick={() => setIsOpen(true)}>
                Log in
              </Button>
              <Button outline className={cx('custom-register')} onClick={() => setIsOpen(true)}>
                Register
              </Button>
              {isOpen && <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
