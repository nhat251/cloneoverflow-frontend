import React from 'react';

import classNames from 'classnames/bind';
import styles from './Notice.module.scss';
import Facebook_logo from '~/assets/facebook_logo.svg';

const cx = classNames.bind(styles);

function Notice() {
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('notice-inner')}>
        <li className={cx('notice-content')}>
          <div className={cx('notice-logo')}>
            <img src={Facebook_logo} alt="Facebook" />
          </div>
          <div className={cx('notice-text')}>
            <p>
              Cùng tham gia <strong style={{ color: 'red' }}>nhóm</strong> của <strong>FuOverflow</strong> trên Facebook{' '}
              <a href="https://facebook.com/groups/fuoverflow" target="_blank">
                <strong style={{ color: 'hsla(223, 63%, 52%, 1)' }}>www.facebook.com/groups/fuoverflow</strong>
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notice;
