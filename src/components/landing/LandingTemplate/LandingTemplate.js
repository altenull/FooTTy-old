// @flow
import React, { type Node } from 'react';
import styles from './LandingTemplate.scss';
import classNames from 'classnames/bind';
import ReactRevealText from 'react-reveal-text/lib';

const cx = classNames.bind(styles);

type Props = {
  landing: boolean,
  leagueList: Node,
  footer: Node
};

const LandingTemplate = ({ landing, leagueList, footer }: Props) => {
  return (
    <div>
      <div className={cx('landing-template')}>
        <div className={cx('left-wrapper')}>
          <h1>
            <ReactRevealText
              show={landing}
              text='FOOTTY' />
          </h1>
          <h2>
            <ReactRevealText
              show={landing}
              text='A FOOTBALL TERMINAL' />
          </h2>
          <h3>
            <ReactRevealText
              show={landing}
              text='SPORTS &nbsp;&nbsp;X&nbsp;&nbsp; TECHNOLOGY' />
          </h3>
        </div>
        <div className={cx('right-wrapper')}>
          {leagueList}
        </div>
      </div>
      {footer}
    </div>
  );
}

export default LandingTemplate;