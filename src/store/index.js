// @flow
import configure from './configure';
import type { Base } from './modules/base';
import type { League } from './modules/league';

const store = configure();

export default store;

export type State = {
  base: Base,
  league: League,
  pender: {
    pending: any,
    success: any,
    failure: any
  }
};