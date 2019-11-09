import * as actiontypes from "./actiontypes";

export const connect = () => {
  return {
    type: actiontypes.TORUS__CONNECT
  };
};

export const connectSucceeded = () => {
  return {
    type: actiontypes.TORUS__CONNECT_SUCCEEDED,
    data: {}
  };
};

export const connectFailed = err => {
  return {
    type: actiontypes.TORUS__CONNECT_FAILED,
    data: {
      message: err
    }
  };
};

export const disconnected = () => {
  return {
    type: actiontypes.TORUS__DISCONNECTED
  };
};

export const getPk = () => {
  return {
    type: actiontypes.TORUS__GET_PK
  };
};

export const getPkSucceeded = pk => {
  return {
    type: actiontypes.TORUS__GET_PK_SUCCEEDED,
    data: {
      pk
    }
  };
};
export const getPkFailed = err => {
  return {
    type: actiontypes.TORUS__GET_PK_FAILED,
    data: {
      message: err
    }
  };
};
