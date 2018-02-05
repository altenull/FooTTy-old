// @flow
import React from 'react';
import styles from './Background.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Background = ({ children }) => {
  return (
    <div className={cx('background')}>
      <div className={cx('image')}>
      </div>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  );
};

export default Background;