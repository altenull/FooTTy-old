// @flow
import React, { type Node } from 'react';
import styles from './TableWrapper.scss';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

const cx = classNames.bind(styles);

type Props = {
  children: Node
}

const TableWrapper = ({children}: Props) => {
  return (
    <div className={cx('table-wrapper', 'fade-enter')}>
      <div className={cx('table-header')}>
        <div className={cx('spacer-flex')}></div>
        <div className={cx('spacer-width')}></div>
        <div className={cx('numeric-data')} title='played'>
          Pl
        </div>
        <div className={cx('numeric-data')} title='win'>
          W
        </div>
        <div className={cx('numeric-data')} title='draw'>
          D
        </div>
        <div className={cx('numeric-data')} title='loss'>
          L
        </div>
        <div className={cx('numeric-data')} title='goals for'>
          GF
        </div>
        <div className={cx('numeric-data')} title='goals against'>
          GA
        </div>
        <div className={cx('numeric-data')} title='goals difference'>
          GD
        </div>
        <div className={cx('numeric-data')} title='points'>
          Pts
        </div>
      </div>
      <div className={cx('scroll')}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          // autoHeight
          // autoHeightMin={300}
          // autoHeightMax={480}
        >
          {children}
        </Scrollbars>
      </div>
    </div>
  );
}

export default TableWrapper;