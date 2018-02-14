// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { List } from 'immutable';
import Header from 'components/team/Header';

type Props = {
  currentTeamId: string,
  teams: List
};

class HeaderContainer extends Component<Props> {
  render() {
    const { currentTeamId, teams } = this.props;

    const findResult = teams.toJS().find(c => c.idTeam === currentTeamId);

    const badge = findResult.strTeamBadge;
    const teamName = findResult.strTeam;

    const webSite = (findResult.strWebsite !== '') ? findResult.strWebsite : null;
    const facebook = (findResult.strFacebook !== '') ? findResult.strFacebook : null;
    const twitter = (findResult.strTwitter !== '') ? findResult.strTwitter : null;
    const instagram = (findResult.strInstagram !== '') ? findResult.strInstagram : null;
    const youtube = (findResult.strYoutube !== '') ? findResult.strYoutube : null;

    return (
      <Header
        badge={badge}
        teamName={teamName}
        webSite={webSite}
        facebook={facebook}
        twitter={twitter}
        instagram={instagram}
        youtube={youtube}
      />
    );
  }
}

export default connect(
  ({ team, league }: State) => ({
    currentTeamId: team.currentTeamId,
    teams: league.teams
  }),
  () => ({})
)(HeaderContainer);