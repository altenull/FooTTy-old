// @flow
import React from 'react';
import styles from './LeagueList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  onClick(leagueId: string): void
};

const LeagueList = ({onClick}: Props) => {
  const premierLeagueImg = require('static/images/PremierLeague_Badge_Gray.png');
  const laLigaImg = require('static/images/LaLiga_Badge_Gray.png');
  const bundesLigaImg = require('static/images/BundesLiga_Badge_Gray.png');

  return (
    <div className={cx('league-list')}>
      <div className={cx('league', 'fade-enter1')} onClick={() => onClick('PL')}>
        <img src={premierLeagueImg} className={cx('premierleague')} alt='premier league' />
        <span>PREMIER LEAGUE</span>
      </div>
      <div className={cx('league', 'fade-enter2')} onClick={() => onClick('LL')}>
        <img src={laLigaImg} className={cx('laliga')} alt='la liga' />
        <span>LA LIGA</span>
      </div>
      <div className={cx('league', 'fade-enter3')} onClick={() => onClick('BL')}>
        <img src={bundesLigaImg} className={cx('bundesliga')} alt='bundesliga' />
        <span>BUNDESLIGA</span>
      </div>
    </div>
  );
}

export default LeagueList;