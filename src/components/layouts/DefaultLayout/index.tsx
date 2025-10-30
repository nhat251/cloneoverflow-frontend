import { type PropsWithChildren } from 'react';
import { Header, Notice } from '~/components/layouts/components';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Notice />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
