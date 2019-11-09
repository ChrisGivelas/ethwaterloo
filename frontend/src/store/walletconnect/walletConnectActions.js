import * as actiontypes from "./actiontypes";

export const connect = () => {
  return {
    type: actiontypes.WALLETCONNECT_CONNECT
  };
};

export const connectSucceeded = (account, chainId, peerId) => {
  return {
    type: actiontypes.WALLETCONNECT_CONNECT_SUCCEEDED,
    data: {
      account,
      chainId,
      peerId
    }
  };
};

export const connectFailed = err => {
  return {
    type: actiontypes.WALLETCONNECT_CONNECT_FAILED,
    data: {
      message: err
    }
  };
};

export const disconnected = () => {
  return {
    type: actiontypes.WALLETCONNECT_DISCONNECTED
  };
};
