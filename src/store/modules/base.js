// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const START_LANDING = 'base/START_LANDING';
const CHANGE_CURRENT_PAGE = 'base/CHANGE_CURRENT_PAGE';

export type BaseActionCreators = {
  startLanding(): any,
  changeCurrentPage(currentPage: string): any
};

export const actionCreators = {
  startLanding: createAction(START_LANDING),
  changeCurrentPage: createAction(CHANGE_CURRENT_PAGE)
};

export type Base = {
  landing: boolean,
  currentPage: string
};

const BaseRecord = Record({
  landing: false,
  currentPage: 'home'
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [START_LANDING]: state => state.set('landing', true),
  [CHANGE_CURRENT_PAGE]: (state, { payload: currentPage }) => state.set('currentPage', currentPage)
}, initialState);