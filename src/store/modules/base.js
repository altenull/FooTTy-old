// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const CHANGE_CURRENT_PAGE = 'base/CHANGE_CURRENT_PAGE';
const START_REVEAL_TEXT = 'base/START_REVEAL_TEXT';

export type BaseActionCreators = {
  changeCurrentPage(currentPage: string): any,
  startRevealText(): any
};

export const actionCreators = {
  changeCurrentPage: createAction(CHANGE_CURRENT_PAGE),
  startRevealText: createAction(START_REVEAL_TEXT)
};

export type Base = {
  currentPage: string,
  revealText: boolean
}

const BaseRecord = Record({
  currentPage: 'home',
  revealText: false
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [CHANGE_CURRENT_PAGE]: (state, { payload: currentPage }) => state.set('currentPage', currentPage),
  [START_REVEAL_TEXT]: state => state.set('revealText', true)
}, initialState);