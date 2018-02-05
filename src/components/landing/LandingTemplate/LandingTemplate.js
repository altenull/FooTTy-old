// @flow
import React, { type Node } from 'react';
import styles from './LandingTemplate.scss';
import classNames from 'classnames/bind';
import ReactRevealText from 'react-reveal-text/lib';

const cx = classNames.bind(styles);

type Props = {
  revealText: boolean,
  leagueList: Node
};

const LandingTemplate = ({ revealText, leagueList }: Props) => {
  return (
    <div className={cx('landing-template')}>
      <div className={cx('left-wrapper')}>
        <h1>
          <ReactRevealText
            show={revealText}
            text='FOOTTY' />
        </h1>
        <h2>
          <ReactRevealText
            show={revealText}
            text='A FOOTBALL TERMINAL' />
        </h2>
        <p>
          <ReactRevealText
            show={revealText}
            text='SPORTS &nbsp;&nbsp;X&nbsp;&nbsp; TECHNOLOGY' />
        </p>
      </div>
      <div className={cx('right-wrapper')}>
        {leagueList}
      </div>
    </div>
  );
};

export default LandingTemplate;