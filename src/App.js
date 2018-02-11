// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import PageTemplate from 'components/base/PageTemplate';
import LandingTemplateContainer from 'containers/landing/LandingTemplateContainer';
import LeagueTemplateContainer from 'containers/league/LeagueTemplateContainer';

type Props = {
  currentPage: string
};

class App extends Component<Props> {
  renderTemplate = (currentPage: string) => {
    switch (currentPage) {
    case 'home':
      return <LandingTemplateContainer />;
    case 'league':
      return <LeagueTemplateContainer />;
    default:
      return null;
    }
  }

  render() {
    const { currentPage } = this.props;
    const { renderTemplate } = this;

    return (
      <PageTemplate>
        {renderTemplate(currentPage)}
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