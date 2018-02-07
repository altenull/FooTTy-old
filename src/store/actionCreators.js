// @flow
import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as baseActions, type BaseActionCreators } from './modules/base';
import { actionCreators as leagueActions, type LeagueActionCreators } from './modules/league';

const { dispatch } = store;

export const BaseActions: BaseActionCreators = bindActionCreators(baseActions, dispatch);
export const LeagueActions: LeagueActionCreators = bindActionCreators(leagueActions, dispatch);