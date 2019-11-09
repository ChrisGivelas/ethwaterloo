import produce from "immer";

import * as actiontypes from "./actiontypes";

export const initialState = {
  account: null,
  chainId: null,
  peerId: null,
  isConnected: null
};

export const walletConnectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actiontypes.WALLETCONNECT_CONNECT_SUCCEEDED:
        draft.account = action.data.account;
        draft.chainId = action.data.chainId;
        draft.peerId = action.data.peerId;
        draft.isConnected = true;
        break;

      case actiontypes.WALLETCONNECT_CONNECT_FAILED:
        draft.isConnected = false;
        break;

      case actiontypes.WALLETCONNECT_DISCONNECTED:
        draft.isConnected = false;
        break;

      default:
        break;
    }
  });
