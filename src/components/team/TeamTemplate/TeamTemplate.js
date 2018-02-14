// @flow
import React, { type Node } from 'react';
import styles from './TeamTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  header: Node,
  footer: Node,
  info: Node
};

const TeamTemplate = ({header, footer, info}: Props) => {
  return (
    <div>
      {header}
      <div className={cx('team-template')}>
        {info}
      </div>
      {footer}
    </div>
  );
}

export default TeamTemplate;