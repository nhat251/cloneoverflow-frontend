import React from 'react';

import classNames from 'classnames/bind';
import styles from './Notice.module.scss';
import Facebook_logo from '~/assets/facebook_logo.svg';

const cx = classNames.bind(styles);

function Notice() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('notice-inner')}>
        <div className={cx('notice-logo')}>
          <img src={Facebook_logo} alt="Facebook" />
        </div>
        <div className={cx('notice-text')}>
          <p>
            Cùng tham gia <strong style={{ color: 'red' }}>nhóm</strong> của <strong>FuOverflow</strong> trên Facebook
            www.facebook.com/groups/fuoverflow
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notice;
