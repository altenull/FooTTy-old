// @flow
import React, { type Node } from 'react';
import styles from './PlayerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  header: Node,
  footer: Node,
  profile: Node
};

const PlayerTemplate = ({header, footer, profile}: Props) => {
  return (
    <div>
      {header}
      <div className={cx('player-template')}>
        {profile}
      </div>
      {footer}
    </div>
  );
}

export default PlayerTemplate;