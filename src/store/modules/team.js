// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, List, fromJS, type Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const SET_CURRENT_TEAMID = 'team/SET_CURRENT_TEAMID';
const INITIALIZE_TEAM = 'team/INITIALIZE_TEAM';

export type TeamActionCreators = {
  setCurrentTeamId(currentTeamId: string): any,
  initializeTeam(): any
};

export const actionCreators = {
  setCurrentTeamId: createAction(SET_CURRENT_TEAMID),
  initializeTeam: createAction(INITIALIZE_TEAM)
};

export type Team = {
  currentTeamId: string
};

const TeamRecord = Record({
  currentTeamId: ''
});

const initialState: Map<string, *> = TeamRecord();

export default handleActions({
  [SET_CURRENT_TEAMID]: (state, { payload: currentTeamId }) => state.set('currentTeamId', currentTeamId),
  [INITIALIZE_TEAM]: state => initialState
}, initialState);