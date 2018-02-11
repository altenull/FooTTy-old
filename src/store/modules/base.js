// @flow
import { createAction, handleActions } from 'redux-actions';
import { Record, type Map } from 'immutable';

// action types
const INITIALIZE_BASE_STATE = 'base/INITIALIZE_BASE_STATE';
const CHANGE_CURRENT_PAGE = 'base/CHANGE_CURRENT_PAGE';

export type BaseActionCreators = {
  initializeBaseState(): any,
  changeCurrentPage(currentPage: string): any
};

export const actionCreators = {
  initializeBaseState: createAction(INITIALIZE_BASE_STATE),
  changeCurrentPage: createAction(CHANGE_CURRENT_PAGE)
};

export type Base = {
  currentPage: string
};

const BaseRecord = Record({
  currentPage: 'home'
});

const initialState: Map<string, *> = BaseRecord();

export default handleActions({
  [INITIALIZE_BASE_STATE]: state => initialState,
  [CHANGE_CURRENT_PAGE]: (state, { payload: currentPage }) => state.set('currentPage', currentPage)
}, initialState);