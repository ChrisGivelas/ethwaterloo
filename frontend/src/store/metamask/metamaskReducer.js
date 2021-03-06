import produce from "immer";

import * as actiontypes from "./actiontypes";

export const initialState = {
  isConnected: null,
  pk: null,
  err: null
};

export const metamaskReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actiontypes.METAMASK__CONNECT_SUCCEEDED:
        draft.isConnected = true;
        break;

      case actiontypes.METAMASK__CONNECT_FAILED:
        draft.isConnected = false;
        draft.err = action.data.message;
        break;

      case actiontypes.METAMASK__DISCONNECTED:
        draft.isConnected = false;
        break;

      case actiontypes.METAMASK__GET_PK_SUCCEEDED:
        draft.pk = action.data.pk;
        break;

      case actiontypes.METAMASK__GET_PK_FAILED:
        draft.err = action.data.message;
        break;

      default:
        break;
    }
  });
