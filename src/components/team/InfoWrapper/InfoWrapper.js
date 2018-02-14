// @flow
import React, { type Node } from 'react';
import styles from './InfoWrapper.scss';
import classNames from 'classnames/bind';
import { Scrollbars } from 'react-custom-scrollbars';

const cx = classNames.bind(styles);

type Props = {
  established: ?string,
  stadium: ?string,
  manager: ?string,
  children: Node
}

const InfoWrapper = ({established, stadium, manager, children}: Props) => {
  return (
    <div className={cx('info-wrapper', 'fade-enter')}>
      <div className={cx('team-infos')}>
        { established &&
          <div className={cx('info')}>
            <div className={cx('info-name')}>
              Established
            </div>
            <div className={cx('spacer')}>
            </div>
            <div className={cx('info-content')}>
              {established}
            </div>
          </div>
        }
        { stadium &&
          <div className={cx('info')}>
            <div className={cx('info-name')}>
              Stadium
            </div>
            <div className={cx('spacer')}>
            </div>
            <div className={cx('info-content')}>
              {stadium}
            </div>
          </div>
        }
        { manager &&
          <div className={cx('info')}>
            <div className={cx('info-name')}>
              Manager
            </div>
            <div className={cx('spacer')}>
            </div>
            <div className={cx('info-content')}>
              {manager}
            </div>
          </div>
        }
      </div>
      <div className={cx('scroll')}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <div className={cx('players')}>
            {children}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default InfoWrapper;