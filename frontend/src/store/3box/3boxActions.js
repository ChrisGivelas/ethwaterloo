import * as actiontypes from "./actiontypes";

export const connect = addr => {
  return {
    type: actiontypes.THREEBOX_CONNECT,
    payload: {addr}
  };
};

export const connectSucceeded = () => {
  return {
    type: actiontypes.THREEBOX_CONNECT_SUCCEEDED,
    data: {}
  };
};

export const connectFailed = err => {
  return {
    type: actiontypes.THREEBOX_CONNECT_FAILED,
    data: {
      message: err
    }
  };
};

export const disconnected = () => {
  return {
    type: actiontypes.THREEBOX_DISCONNECTED
  };
};
