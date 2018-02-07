// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './FooterWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  children: Node
};

const FooterWrapper = ({children}: Props) => {
  return (
    <div className={cx('container')}>
      <div className={cx('footer-wrapper')}>
        {children}
      </div>
    </div>
  );
}

export default FooterWrapper;