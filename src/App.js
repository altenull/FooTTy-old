// @flow
import React, { Component, type Node } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import PageTemplate from 'components/base/PageTemplate';
import LandingTemplateContainer from 'containers/landing/LandingTemplateContainer';
import LeagueTemplateContainer from 'containers/league/LeagueTemplateContainer';
import TeamTemplateContainer from 'containers/team/TeamTemplateContainer';
import PlayerTemplateContainer from 'containers/player/PlayerTemplateContainer';

type Props = {
  currentPage: string
};

class App extends Component<Props> {
  renderTemplate = (): ?Node => {
    const { currentPage } = this.props;

    switch (currentPage) {
    case 'home':
      return <LandingTemplateContainer />;
    case 'league':
      return <LeagueTemplateContainer />;
    case 'team':
      return <TeamTemplateContainer />;
    case 'player':
      return <PlayerTemplateContainer />;
    default:
      return null;
    }
  }

  render() {
    const { renderTemplate } = this;

    return (
      <PageTemplate>
        {renderTemplate()}
      </PageTemplate>
    );
  }
}

export default connect(
  ({ base }: State) => ({
    currentPage: base.currentPage
  }),
  () => ({})
)(App);