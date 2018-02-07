// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { BaseActions } from 'store/actionCreators';
import LandingTemplate from 'components/landing/LandingTemplate';
import LeagueList from 'components/landing/LeagueList';
import Footer from 'components/landing/Footer';

type Props = {
  landing: boolean
};

class LandingTemplateContainer extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      BaseActions.startLanding();
    }, 200);
  }

  render() {
    const { landing } = this.props;

    return (
      <LandingTemplate
        landing={landing}
        leagueList={
          <LeagueList />
        }
        footer={
          <Footer />
        }
      />
    );
  }
}

export default connect(
  ({ base }: State) => ({
    landing: base.landing
  }),
  () => ({})
)(LandingTemplateContainer);