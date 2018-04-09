// @flow
import React, { type Node } from 'react';
import styles from './Background.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  children: Node
}

const Background = ({
  children
}: Props) => {
  return (
    <div className={cx('background')}>
      <div className={cx('image')} />
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  );
}

export default Background;