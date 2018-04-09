// @flow
import React, { type Node } from 'react';
import styles from './TableWrapper.scss';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

const cx = classNames.bind(styles);

type Props = {
  latestSeason: string,
  children: Node
}

const TableWrapper = ({
  latestSeason,
  children
}: Props) => {
  const prevYear = latestSeason.substring(0, 2);
  const nextYear = latestSeason.substring(2);

  return (
    <div className={cx('table-wrapper', 'fade-enter')}>
      <div className={cx('table-header')}>
        <div className={cx('season')}>
          {`${prevYear}/${nextYear} Season`}
        </div>
        <div className={cx('spacer-flex')} />
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
        <div className={cx('numeric-data', 'goals-for')} title='goals for'>
          GF
        </div>
        <div className={cx('numeric-data', 'goals-against')} title='goals against'>
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
        >
          {children}
        </Scrollbars>
      </div>
    </div>
  );
}

export default TableWrapper;