// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions, PlayerActions } from 'store/actionCreators';
import { List } from 'immutable';
import InfoWrapper from 'components/team/InfoWrapper';
import PlayerItem from 'components/team/PlayerItem';
import Spinner from 'components/common/Spinner';

type Props = {
  teams: List,
  currentTeamId: string,
  players: ?List
}

class InfoContainer extends Component<Props> {
  handleClick = (idPlayer: string): void => {
    PlayerActions.setCurrentPlayerId(idPlayer);
    BaseActions.changeCurrentPage('player');
  }

  render() {
    const { teams, currentTeamId, players } = this.props;
    const { handleClick } = this;

    if (!players) {
      return (
        <Spinner />
      );
    }

    const findResult = teams.toJS().find(c => c.idTeam === currentTeamId);

    const established = (findResult.intFormedYear !== '') ? findResult.intFormedYear : null;
    const stadium = (findResult.strStadium !== '') ? findResult.strStadium : null;
    const manager = (findResult.strManager !== '') ? findResult.strManager : null;
    const emptyImgURL = findResult.strTeamBadge;

    const playersJS = players.toJS();
    const playerList = playersJS.map((playersJS, i) => {
      return (
        <PlayerItem
          key={i}
          onClick={handleClick}
          idPlayer={playersJS.idPlayer}
          thumbImgURL={playersJS.strThumb}
          name={playersJS.strPlayer}
          country={playersJS.strNationality}
          emptyImgURL={emptyImgURL}
        />
      );
    });

    return (
      <InfoWrapper
        established={established}
        stadium={stadium}
        manager={manager}
      >
        {playerList}
      </InfoWrapper>
    );
  }
}

export default connect(
  ({ league, team }: State) => ({
    teams: league.teams,
    currentTeamId: team.currentTeamId,
    players: team.players
  }),
  () => ({})
)(InfoContainer);