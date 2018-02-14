// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { List } from 'immutable';
import ProfileWrapper from 'components/player/ProfileWrapper';

type Props = {
  players: ?List,
  currentPlayerId: string
}

class ProfileContainer extends Component<Props> {
  render() {
    const { players, currentPlayerId } = this.props;

    const findResult = players.toJS().find(c => c.idPlayer === currentPlayerId);

    const thumbImgURL = findResult.strThumb;
    const playerName = findResult.strPlayer;
    const position = findResult.strPosition;
    const country = findResult.strNationality;
    const birthDay = findResult.dateBorn;
    const teamName = findResult.strTeam;
    const height = ((findResult.strHeight !== '') && (findResult.strHeight !== '0')) ? findResult.strHeight : null;
    const weight = ((findResult.strWeight !== '') && (findResult.strWeight !== '0')) ? findResult.strWeight : null;

    return (
      <ProfileWrapper
        thumbImgURL={thumbImgURL}
        playerName={playerName}
        position={position}
        country={country}
        birthDay={birthDay}
        teamName={teamName}
        height={height}
        weight={weight}
      />
    );
  }
}

export default connect(
  ({ team, player }: State) => ({
    players: team.players,
    currentPlayerId: player.currentPlayerId
  }),
  () => ({})
)(ProfileContainer);