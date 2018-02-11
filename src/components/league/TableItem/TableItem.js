// @flow
import React from 'react';
import styles from './TableItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  rank: number,
  name: string,
  played: number,
  win: number,
  draw: number,
  loss: number,
  goalsFor: number,
  goalsAgainst: number,
  goalsDifference: number,
  points: number
}

const TableItem = ({
  rank,
  name,
  played,
  win,
  draw,
  loss,
  goalsFor,
  goalsAgainst,
  goalsDifference,
  points
}: Props) => {
  const imgUrl = require('static/images/PremierLeague_Badge.png');

  return (
    <div className={cx('table-item')}>
      <div className={cx('numeric-data', 'rank')}>
        {rank}
      </div>
      <div className={cx('team-badge')}>
        <img src={imgUrl} alt='sample' />
      </div>
      <div className={cx('team-name')}>
        {name}
      </div>
      <div className={cx('numeric-data', 'played')}>
        {played}
      </div>
      <div className={cx('numeric-data', 'win')}>
        {win}
      </div>
      <div className={cx('numeric-data', 'draw')}>
        {draw}
      </div>
      <div className={cx('numeric-data', 'loss')}>
        {loss}
      </div>
      <div className={cx('numeric-data', 'goals-for')}>
        {goalsFor}
      </div>
      <div className={cx('numeric-data', 'goals-against')}>
        {goalsAgainst}
      </div>
      <div className={cx('numeric-data', 'goals-difference')}>
        {goalsDifference}
      </div>
      <div className={cx('numeric-data', 'points')}>
        {points}
      </div>
    </div>
  );
}

export default TableItem;