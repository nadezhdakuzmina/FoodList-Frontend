import { A as CoreA } from '../../actions/core';

import type { ActionTypes } from '../../types';
import type { Core } from './types';

export const initialState: Core = {
  data: null,
  isStarted: false,
  serverTime: null,
};

const core = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case CoreA.START_PAGE:
      return {
        ...state,
        isStarted: true,
        serverTime: action.time,
        data: {
          ...state.data,
          ...action.data,
        },
      };

    default:
      return state;
  }
};

export default core;
