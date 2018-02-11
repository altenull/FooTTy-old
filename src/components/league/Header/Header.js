// @flow
import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import HeaderWrapper from 'components/common/HeaderWrapper';

const cx = classNames.bind(styles);

type Props = {
  currentLeague: string
};

const Header = ({currentLeague}: Props) => {
  let leagueBadgeImg = null;
  let leagueName = '';

  if (currentLeague === 'PL') {
    leagueBadgeImg = require('static/images/PremierLeague_Badge.png');
    leagueName = 'Premier League';
  } else if (currentLeague === 'LL') {
    leagueBadgeImg = require('static/images/LaLiga_Badge.png');
    leagueName = 'La Liga';
  } else if (currentLeague === 'BL') {
    leagueBadgeImg = require('static/images/BundesLiga_Badge.png');
    leagueName = 'Bundesliga';
  }

  return (
    <HeaderWrapper>
      <div className={cx('header', 'slide-enter')}>
        <img src={leagueBadgeImg} alt={leagueName} />
        <h1>
          {leagueName}
        </h1>
      </div>
    </HeaderWrapper>
  );
}

export default Header;