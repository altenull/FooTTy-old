// @flow
import React, { Component, type Node } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import PageTemplate from 'components/base/PageTemplate';
import LandingTemplateContainer from 'containers/landing/LandingTemplateContainer';
import LeagueTemplateContainer from 'containers/league/LeagueTemplateContainer';
import TeamTemplateContainer from 'containers/team/TeamTemplateContainer';
import PlayerTemplateContainer from 'containers/player/PlayerTemplateContainer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

type Props = {
  currentPage: string
};

class App extends Component<Props> {
  componentDidMount() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
      <div>
        <Helmet>
          <title>Footty - a Football Terminal</title>
          <meta name="keywords" content="Footty, Football, Terminal, League Table, Primier League, La Liga, Bundesliga, altenull"/>
          <meta name="description" content="Footty is a football information service. You can check real time standings of three major football leagues in Europe, Including team and player information."/>
        </Helmet>
        <PageTemplate>
          {renderTemplate()}
        </PageTemplate>
      </div>
    );
  }
}

export default connect(
  ({ base }: State) => ({
    currentPage: base.currentPage
  }),
  () => ({})
)(App);