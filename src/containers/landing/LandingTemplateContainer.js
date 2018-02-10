// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import type { LatestSeasons } from 'store/modules/league';
import { BaseActions, LeagueActions } from 'store/actionCreators';
import { leagueInfo } from 'lib/variables';
import LandingTemplate from 'components/landing/LandingTemplate';
import LeagueList from 'components/landing/LeagueList';
import Footer from 'components/landing/Footer';

type Props = {
  latestSeasons: ?LatestSeasons
};

class LandingTemplateContainer extends Component<Props> {
  componentDidMount() {
    BaseActions.initializeBaseState();
  }

  handleClick = async (leagueId: string) => {
    const { latestSeasons } = this.props;
    let latestSeason = null;
    let currentLeague = null;

    if (leagueId === leagueInfo.find(c => c.alias === 'PL').id) {
      latestSeason = latestSeasons.latestSeasonPL;
      currentLeague = 'PL';
    } else if (leagueId === leagueInfo.find(c => c.alias === 'LL').id) {
      latestSeason = latestSeasons.latestSeasonLL;
      currentLeague = 'LL';
    } else if (leagueId === leagueInfo.find(c => c.alias === 'BL').id) {
      latestSeason = latestSeasons.latestSeasonLL;
      currentLeague = 'BL';
    }

    try {
      await LeagueActions.getLeagueTable({ leagueId, latestSeason });
      BaseActions.changeCurrentPage('league');
      LeagueActions.setCurrentLeague(currentLeague);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { handleClick } = this;
    const leagueList = (
      <LeagueList
        onClick={handleClick}
      />
    );
    const footer = (
      <Footer />
    );

    return (
      <LandingTemplate
        leagueList={leagueList}
        footer={footer}
      />
    );
  }
}

export default connect(
  ({ league }: State) => ({
    latestSeasons: league.latestSeasons
  }),
  () => ({})
)(LandingTemplateContainer);