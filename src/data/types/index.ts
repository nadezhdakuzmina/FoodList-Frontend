import type { CoreState } from '@data/reducers/core';
import type { FrigeState } from '../reducers/frige';

export interface State {
  frige: FrigeState;
  core: CoreState;
}
