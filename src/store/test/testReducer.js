import produce from "immer";

import * as actiontypes from "./actiontypes";

export const initialState = {
  fetching: false,
  message: null
};

export const testReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actiontypes.TEST:
        draft.message = action.data.message;
        draft.fetching = true;
        break;

      case actiontypes.TEST_SUCCEDED:
        draft.fetching = false;
        break;

      case actiontypes.TEST_FAILED:
        draft.fetching = false;
        break;

      default:
        break;
    }
  });
