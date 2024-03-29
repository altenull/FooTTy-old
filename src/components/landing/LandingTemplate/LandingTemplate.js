// @flow
import React, { Component, type Node } from 'react';
import styles from './LandingTemplate.scss';
import classNames from 'classnames/bind';
import ReactRevealText from 'react-reveal-text/lib';

const cx = classNames.bind(styles);

type Props = {
  leagueList: Node,
  footer: Node
};

class LandingTemplate extends Component<Props> {
  state = {
    show: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 200);
  }

  render() {
    const { leagueList, footer } = this.props;
    const { show } = this.state;

    return (
      <div>
        <div className={cx('landing-template')}>
          <div className={cx('left-wrapper')}>
            <h1>
              <ReactRevealText
                show={show}
                text='FOOTTY'
              />
            </h1>
            <h2>
              <ReactRevealText
                show={show}
                text='A FOOTBALL TERMINAL'
              />
            </h2>
            <h3>
              <ReactRevealText
                show={show}
                text='SPORTS &nbsp;&nbsp;X&nbsp;&nbsp; TECHNOLOGY'
              />
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
}

export default LandingTemplate;