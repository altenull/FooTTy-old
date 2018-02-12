// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './HeaderWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  children: Node
};

const HeaderWrapper = ({children}: Props) => {
  return (
    <div className={cx('container')}>
      <div className={cx('header-wrapper')}>
        {children}
      </div>
    </div>
  );
}

export default HeaderWrapper;