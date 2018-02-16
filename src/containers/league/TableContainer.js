// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions, TeamActions } from 'store/actionCreators';
import { List } from 'immutable';
import TableWrapper from 'components/league/TableWrapper';
import TableItem from 'components/league/TableItem';
import Spinner from 'components/common/Spinner';

type Props = {
  latestSeason: string,
  table: ?List,
  teams: ?List,
  isLoaded: boolean
}

class TableContainer extends Component<Props> {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isLoaded !== nextProps.isLoaded;
  }

  handleClick = async (teamid: string): Promise<*> => {
    const { teams } = this.props;
    TeamActions.setCurrentTeamId(teamid);
    BaseActions.changeCurrentPage('team');

    const currentTeam = teams.toJS().find(c => c.idTeam === teamid).strTeam;

    try {
      await TeamActions.getAllPlayer(currentTeam);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { latestSeason, table, teams, isLoaded } = this.props;
    const { handleClick } = this;

    if (!isLoaded) {
      return (
        <Spinner />
      );
    }

    const tableJS = table.toJS();
    const teamsJS = teams.toJS();
    const leagueTable = tableJS.map((tableJS, i) => {
      return (
        <TableItem
          key={i}
          onClick={handleClick}
          teamid={tableJS.teamid}
          rank={i + 1}
          badge={teamsJS.find(c => c.idTeam === tableJS.teamid).strTeamBadge}
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
    });

    return (
      <TableWrapper
        latestSeason={latestSeason}
      >
        {leagueTable}
      </TableWrapper>
    );
  }
}

export default connect(
  ({ league }: State) => ({
    latestSeason: league.latestSeason,
    table: league.table,
    teams: league.teams,
    isLoaded: league.isLoaded
  }),
  () => ({})
)(TableContainer);