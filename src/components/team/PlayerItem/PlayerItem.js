// @flow
import React from 'react';
import styles from './PlayerItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(): void,
  idPlayer: string,
  thumbImgURL: ?string,
  name: string,
  country: string,
  emptyImgURL: string
}

const PlayerItem = ({onClick, idPlayer, thumbImgURL, name, country, emptyImgURL}: Props) => {
  return (
    <div className={cx('player-item')} onClick={() => onClick(idPlayer)}>
      <div className={cx('thumb')}>
        { thumbImgURL
          ? <img src={`http://${thumbImgURL}`} alt={name} className={cx('thumb-img')}/>
          : <img src={`http://${emptyImgURL}`} alt={name} className={cx('empty-img')}/>
        }
      </div>
      <div className={cx('profile')}>
        <div className={cx('name')}>
          {name}
        </div>
        <div className={cx('country')}>
          {country}
        </div>
      </div>
    </div>
  );
}

export default PlayerItem;