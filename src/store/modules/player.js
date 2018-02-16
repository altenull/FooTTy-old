// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const SET_CURRENT_PLAYERID = 'team/SET_CURRENT_PLAYERID';
const INITIALIZE_PLAYER = 'team/INITIALIZE_PLAYER';

export type PlayerActionCreators = {
  setCurrentPlayerId(currentPlayerId: string): any,
  initializePlayer(): any
};

export const actionCreators = {
  setCurrentPlayerId: createAction(SET_CURRENT_PLAYERID),
  initializePlayer: createAction(INITIALIZE_PLAYER)
};

export type Player = {
  currentPlayerId: string
};

const PlayerRecord = Record({
  currentPlayerId: ''
});

const initialState: Map<string, *> = PlayerRecord();

export default handleActions({
  [SET_CURRENT_PLAYERID]: (state, { payload: currentPlayerId }) => state.set('currentPlayerId', currentPlayerId),
  [INITIALIZE_PLAYER]: state => initialState
}, initialState);