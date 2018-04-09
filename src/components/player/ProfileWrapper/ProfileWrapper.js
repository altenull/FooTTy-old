// @flow
import React from 'react';
import styles from './ProfileWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  thumbImgURL: ?string,
  playerName: string,
  position: string,
  country: string,
  birthDay: string,
  teamName: string,
  height: ?string,
  weight: ?string
}

const ProfileWrapper = ({
  thumbImgURL,
  playerName,
  position,
  country,
  birthDay,
  teamName,
  height,
  weight
}: Props) => {
  return (
    <div className={cx('profile-wrapper', 'fade-enter')}>
      { thumbImgURL &&
        <div className={cx('thumb')}>
          <img src={`${thumbImgURL}`} alt={playerName} className={cx('thumb-img')} />
        </div>
      }
      <div className={cx('player-infos')}>
        <div className={cx('info')}>
          <div className={cx('info-name')}>
            Position
          </div>
          <div className={cx('spacer')}>
          </div>
          <div className={cx('info-content')}>
            {position}
          </div>
        </div>
        <div className={cx('info')}>
          <div className={cx('info-name')}>
            Nationality
          </div>
          <div className={cx('spacer')}>
          </div>
          <div className={cx('info-content')}>
            {country}
          </div>
        </div>
        <div className={cx('info')}>
          <div className={cx('info-name')}>
            Team
          </div>
          <div className={cx('spacer')}>
          </div>
          <div className={cx('info-content')}>
            {teamName}
          </div>
        </div>
        <div className={cx('info')}>
          <div className={cx('info-name')}>
            Born
          </div>
          <div className={cx('spacer')}>
          </div>
          <div className={cx('info-content')}>
            {birthDay}
          </div>
        </div>
        { height &&
          <div className={cx('info')}>
            <div className={cx('info-name')}>
              Height
            </div>
            <div className={cx('spacer')}>
            </div>
            <div className={cx('info-content')}>
              {height}
            </div>
          </div>
        }
        { weight &&
          <div className={cx('info')}>
            <div className={cx('info-name')}>
              Weight
            </div>
            <div className={cx('spacer')}>
            </div>
            <div className={cx('info-content')}>
              {weight}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default ProfileWrapper;