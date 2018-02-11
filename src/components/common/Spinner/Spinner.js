// @flow
import React from 'react';
import styles from './Spinner.scss';
import classNames from 'classnames/bind';
import { ChasingDots } from 'better-react-spinkit';

const cx = classNames.bind(styles);

const Spinner = () => {
  return (
    <div className={cx('positioner')}>
      <ChasingDots size={50} color='gray' />
    </div>
  );
}

export default Spinner;