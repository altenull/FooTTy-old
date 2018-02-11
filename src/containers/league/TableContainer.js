// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { List } from 'immutable';
import TableWrapper from 'components/league/TableWrapper';
import TableItem from 'components/league/TableItem';
import Spinner from 'components/common/Spinner';

type Props = {
  table: List
}

class TableContainer extends Component<Props> {
  render() {
    const { table } = this.props;

    if (!table) {
      return (
        <Spinner />
      );
    }

    const tableJS = table.toJS();
    const leagueTable = tableJS.map((tableJS, i) =>
      <TableItem
        key={i}
        rank={i + 1}
        name={tableJS.name}
        played={tableJS.played}
        win={tableJS.win}
        draw={tableJS.draw}
        loss={tableJS.loss}
        goalsFor={tableJS.goalsfor}
        goalsAgainst={tableJS.goalsagainst}
        goalsDifference={tableJS.goalsdifference}
        points={tableJS.total}
      />
    );

    return (
      <TableWrapper>
        {leagueTable}
      </TableWrapper>
    );
  }
}

export default connect(
  ({ league }: State) => ({
    table: league.table
  }),
  () => ({})
)(TableContainer);