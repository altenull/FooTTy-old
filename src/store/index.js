// @flow
import configure from './configure';
import type { Base } from './modules/base';

const store = configure();

export default store;

export type State = {
  base: Base,
  pender: {
    pending: any,
    success: any,
    failure: any
  }
};