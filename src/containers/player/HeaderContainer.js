// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { List } from 'immutable';
import Header from 'components/player/Header';

type Props = {
  players: ?List,
  currentPlayerId: string
};

class HeaderContainer extends Component<Props> {
  render() {
    const { players, currentPlayerId } = this.props;

    const findResult = players.toJS().find(c => c.idPlayer === currentPlayerId);

    const country = findResult.strNationality;
    const playerName = findResult.strPlayer;

    const webSite = (findResult.strWebsite !== '') ? findResult.strWebsite : null;
    const facebook = (findResult.strFacebook !== '') ? findResult.strFacebook : null;
    const twitter = (findResult.strTwitter !== '') ? findResult.strTwitter : null;
    const instagram = (findResult.strInstagram !== '') ? findResult.strInstagram : null;

    return (
      <Header
        country={country}
        playerName={playerName}
        webSite={webSite}
        facebook={facebook}
        twitter={twitter}
        instagram={instagram}
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
)(HeaderContainer);