// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BaseActions, LeagueActions } from 'store/actionCreators';
import { leagueInfo } from 'lib/variables';
import LeagueList from 'components/landing/LeagueList';
import * as LeagueAPI from 'lib/api/league.js';

class LeagueListContainer extends Component {
  handleClick = async (leagueAlias: string): Promise<*> => {
    LeagueActions.setCurrentLeague(leagueAlias);
    BaseActions.changeCurrentPage('league');

    const leagueId = leagueInfo.find(c => c.alias === leagueAlias).id;

    try {
      await LeagueActions.getLeagueDetails(leagueAlias);
      const latestSeason = await this.getLatestSeason(leagueAlias);
      await LeagueActions.getLeagueTable({ leagueId, latestSeason });
    } catch (e) {
      console.log(e);
    }
  }

  getLatestSeason = async (leagueAlias: string): Promise<*> => {
    try {
      const response = await LeagueAPI.getLatestSeason(leagueInfo.find(c => c.alias === leagueAlias).id);
      const seasons = response.data.leagues;
      const latestSeason = seasons[seasons.length - 1].strSeason; // last child is latest season
      LeagueActions.setLatestSeason(latestSeason);
      return latestSeason;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { handleClick } = this;

    return (
      <LeagueList
        onClick={handleClick}
      />
    );
  }
}

export default connect(
  () => ({}),
  () => ({})
)(LeagueListContainer);