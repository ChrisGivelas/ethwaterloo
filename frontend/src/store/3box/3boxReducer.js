import produce from "immer";

import * as actiontypes from "./actiontypes";

export const initialState = {
  profile: undefined,
  spaces: undefined,
  threads: undefined
};

export const threeBoxReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actiontypes.THREEBOX_CONNECT_SUCCEEDED:

        break;

      case actiontypes.THREEBOX_CONNECT_FAILED:
        break;

      case actiontypes.THREEBOX_DISCONNECTED:
        break;

      default:
        break;
    }
  });
