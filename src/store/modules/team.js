// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS, type Map } from 'immutable';
import { pender } from 'redux-pender';
import * as TeamAPI from 'lib/api/team';

// action types
const SET_CURRENT_TEAMID = 'team/SET_CURRENT_TEAMID';
const GET_ALL_PLAYER = 'team/GET_ALL_PLAYER';
const INITIALIZE_TEAM = 'team/INITIALIZE_TEAM';

export type TeamActionCreators = {
  setCurrentTeamId(currentTeamId: string): any,
  getAllPlayer(currentTeam: string): any,
  initializeTeam(): any
};

export const actionCreators = {
  setCurrentTeamId: createAction(SET_CURRENT_TEAMID),
  getAllPlayer: createAction(GET_ALL_PLAYER, TeamAPI.getAllPlayer),
  initializeTeam: createAction(INITIALIZE_TEAM)
};

export type Team = {
  currentTeamId: string,
  players: ?List
};

const TeamRecord = Record({
  currentTeamId: '',
  players: null
});

const initialState: Map<string, *> = TeamRecord();

export default handleActions({
  [SET_CURRENT_TEAMID]: (state, { payload: currentTeamId }) => state.set('currentTeamId', currentTeamId),
  ...pender({
    type: GET_ALL_PLAYER,
    onSuccess: (state, { payload: { data } }) => {
      const { player: players } = data;
      return state.set('players', fromJS(players));
    }
  }),
  [INITIALIZE_TEAM]: state => initialState
}, initialState);