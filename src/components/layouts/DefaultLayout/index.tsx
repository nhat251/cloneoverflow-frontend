import React, { type PropsWithChildren } from 'react';
import { Header, Notice } from '~/components/layouts/components';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={cx('default-layout-wrapper')}>
      <Header />
      <div className={cx('default-layout-inner')}>
        <Notice />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
