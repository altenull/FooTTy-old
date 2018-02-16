// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseActions, LeagueActions, TeamActions, PlayerActions } from 'store/actionCreators';
import LeagueListContainer from 'containers/landing/LeagueListContainer';
import FooterContainer from 'containers/landing/FooterContainer';
import LandingTemplate from 'components/landing/LandingTemplate';

class LandingTemplateContainer extends Component {
  componentDidMount() {
    BaseActions.initializeBaseState();
    LeagueActions.initializeLeague();
    TeamActions.initializeTeam();
    PlayerActions.initializePlayer();
  }

  render() {
    const leagueList = <LeagueListContainer />;
    const footer = <FooterContainer />;

    return (
      <LandingTemplate
        leagueList={leagueList}
        footer={footer}
      />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(LandingTemplateContainer);