// @flow
import React from 'react';
import styles from './LeagueList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(leagueId: string): void
};

const LeagueList = ({onClick}: Props) => {
  const PLbadgeGrayImgURL = require('static/images/PL_badge_g.png');
  const LLbadgeGrayImgURL = require('static/images/LL_badge_g.png');
  const BLbadgeGrayImgURL = require('static/images/BL_badge_g.png');

  return (
    <div className={cx('league-list')}>
      <div className={cx('league', 'fade-enter1')} onClick={() => onClick('PL')}>
        <img src={PLbadgeGrayImgURL} className={cx('premierleague')} alt='Premier League' />
        <span>PREMIER LEAGUE</span>
      </div>
      <div className={cx('league', 'fade-enter2')} onClick={() => onClick('LL')}>
        <img src={LLbadgeGrayImgURL} className={cx('laliga')} alt='La Liga' />
        <span>LA LIGA</span>
      </div>
      <div className={cx('league', 'fade-enter3')} onClick={() => onClick('BL')}>
        <img src={BLbadgeGrayImgURL} className={cx('bundesliga')} alt='Bundesliga' />
        <span>BUNDESLIGA</span>
      </div>
    </div>
  );
}

export default LeagueList;