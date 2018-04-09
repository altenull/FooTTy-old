// @flow
import React, { type Node } from 'react';
import styles from './HeaderWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  children: Node
}

const HeaderWrapper = ({
  children
}: Props) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {children}
      </div>
    </div>
  );
}

export default HeaderWrapper;