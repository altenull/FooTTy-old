// @flow
import { bindActionCreators } from 'redux';
import store from './index';
import { actionCreators as baseActions, type BaseActionCreators } from './modules/base';
import { actionCreators as leagueActions, type LeagueActionCreators } from './modules/league';
import { actionCreators as teamActions, type TeamActionCreators } from './modules/team';
import { actionCreators as playerActions, type PlayerActionCreators } from './modules/player';

const { dispatch } = store;

export const BaseActions: BaseActionCreators = bindActionCreators(baseActions, dispatch);
export const LeagueActions: LeagueActionCreators = bindActionCreators(leagueActions, dispatch);
export const TeamActions: TeamActionCreators = bindActionCreators(teamActions, dispatch);
export const PlayerActions: PlayerActionCreators = bindActionCreators(playerActions, dispatch);