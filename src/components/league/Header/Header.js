// @flow
import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import HeaderWrapper from 'components/common/HeaderWrapper';
import { leagueInfo } from 'lib/variables.js';

const cx = classNames.bind(styles);

type Props = {
  currentLeague: string
};

const Header = ({currentLeague}: Props) => {
  const findResult = leagueInfo.find(c => c.alias === currentLeague);

  const badgeImgURL = require(`static/images/${findResult.badgeImg}`);
  const leagueName = findResult.name;

  return (
    <HeaderWrapper>
      <div className={cx('header', 'slide-enter')}>
        <div className={cx('logo')}>
          <img src={badgeImgURL} alt={leagueName} />
          <h1>
            {leagueName}
          </h1>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;