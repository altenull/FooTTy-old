// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS, type Map } from 'immutable';
import { pender } from 'redux-pender';
import * as LeagueAPI from 'lib/api/league';

// action types
const GET_LEAGUE_TABLE = 'league/GET_LEAGUE_TABLE';
const SET_CURRENT_LEAGUE = 'league/SET_CURRENT_LEAGUE';
const GET_LEAGUE_DETAILS = 'league/GET_LEAGUE_DETAILS';
const SET_LATEST_SEASON = 'league/SET_LATEST_SEASON';
const INITIALIZE_LEAGUE = 'league/INITIALIZE_LEAGUE';

export type LeagueActionCreators = {
  getLeagueTable(payload: LeagueAPI.getLeagueTablePayload): any,
  setCurrentLeague(currentLeague: string): any,
  getLeagueDetails(leagueAlias: string): any,
  setLatestSeason(latestSeason: string): any,
  initializeLeague(): any
};

export const actionCreators = {
  getLeagueTable: createAction(GET_LEAGUE_TABLE, LeagueAPI.getLeagueTable),
  setCurrentLeague: createAction(SET_CURRENT_LEAGUE),
  getLeagueDetails: createAction(GET_LEAGUE_DETAILS, LeagueAPI.getLeagueDetails),
  setLatestSeason: createAction(SET_LATEST_SEASON),
  initializeLeague: createAction(INITIALIZE_LEAGUE)
};

export type League = {
  currentLeague: string,
  latestSeason: string,
  table: ?List,
  teams: ?List,
  isLoaded: boolean
};

const LeagueRecord = Record({
  currentLeague: '',
  latestSeason: '',
  table: null,
  teams: null,
  isLoaded: false
});

const initialState: Map<string, *> = LeagueRecord();

export default handleActions({
  [SET_CURRENT_LEAGUE]: (state, { payload: currentLeague }) => state.set('currentLeague', currentLeague),
  ...pender({
    type: GET_LEAGUE_TABLE,
    onSuccess: (state, { payload: { data } }) => {
      const { table } = data;
      return state.set('table', fromJS(table))
        .set('isLoaded', true);
    }
  }),
  ...pender({
    type: GET_LEAGUE_DETAILS,
    onSuccess: (state, { payload: { data } }) => {
      const { teams } = data;
      return state.set('teams', fromJS(teams));
    }
  }),
  [SET_LATEST_SEASON]: (state, { payload: latestSeason }) => state.set('latestSeason', latestSeason),
  [INITIALIZE_LEAGUE]: state => initialState
}, initialState);