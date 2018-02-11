// @flow
import React, { type Node } from 'react';
import styles from './LeagueTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  header: Node,
  footer: Node,
  table: Node
};

const LeagueTemplate = ({header, footer, table}: Props) => {
  return (
    <div>
      {header}
      <div className={cx('league-template')}>
        {table}
      </div>
      {footer}
    </div>
  );
}

export default LeagueTemplate;