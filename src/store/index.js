// @flow
import configure from './configure';
import type { Base } from './modules/base';
import type { League } from './modules/league';
import type { Team } from './modules/team';
import type { Player } from './modules/player';

const store = configure();

export default store;

export type State = {
  base: Base,
  league: League,
  team: Team,
  player: Player,
  pender: {
    pending: any,
    success: any,
    failure: any
  }
};