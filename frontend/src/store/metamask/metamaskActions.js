import * as actiontypes from "./actiontypes";

export const connect = () => {
  return {
    type: actiontypes.METAMASK__CONNECT
  };
};

export const connectSucceeded = () => {
  return {
    type: actiontypes.METAMASK__CONNECT_SUCCEEDED,
    data: {}
  };
};

export const connectFailed = err => {
  return {
    type: actiontypes.METAMASK__CONNECT_FAILED,
    data: {
      message: err
    }
  };
};

export const disconnected = () => {
  return {
    type: actiontypes.METAMASK__DISCONNECTED
  };
};

export const getPk = (verifier, verifierId) => {
  return {
    type: actiontypes.METAMASK__GET_PK,
    data: {
      verifier,
      verifierId
    }
  };
};

export const getPkSucceeded = pk => {
  return {
    type: actiontypes.METAMASK__GET_PK_SUCCEEDED,
    data: {
      pk
    }
  };
};
export const getPkFailed = err => {
  return {
    type: actiontypes.METAMASK__GET_PK_FAILED,
    data: {
      message: err
    }
  };
};
