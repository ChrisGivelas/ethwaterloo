import * as actiontypes from "./actiontypes";

export const connect = addr => {
  return {
    type: actiontypes.THREEBOX_CONNECT,
    payload: {addr}
  };
};

export const connectSucceeded = (data) => {
  return {
    type: actiontypes.THREEBOX_CONNECT_SUCCEEDED,
    data
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


export const listSpaces = addr => {
  return {
    type: actiontypes.THREEBOX_LIST_SPACES,
    payload: {addr}
  };
};

export const listSpacesSucceeded = (data) => {
  return {
    type: actiontypes.THREEBOX_LIST_SPACES_SUCCEEDED,
    data
  };
};

export const listSpacesFailed = err => {
  return {
    type: actiontypes.THREEBOX_LIST_SPACES_FAILED,
    data: {
      message: err
    }
  };
};

export const getSpace = addr => {
  return {
    type: actiontypes.THREEBOX_GET_SPACE,
    payload: {addr}
  };
};

export const getSpaceSucceeded = (data) => {
  return {
    type: actiontypes.THREEBOX_GET_SPACE_SUCCEEDED,
    data
  };
};

export const getSpaceFailed = err => {
  return {
    type: actiontypes.THREEBOX_GET_SPACE_FAILED,
    data: {
      message: err
    }
  };
};

export const getThread = addr => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD,
    payload: {addr}
  };
};

export const getThreadSucceeded = (data) => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD_SUCCEEDED,
    data
  };
};

export const getThreadFailed = err => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD_FAILED,
    data: {
      message: err
    }
  };
};

export const getThreadByAddress = addr => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD_BY_ADDRESS,
    payload: {addr}
  };
};

export const getThreadByAddressSucceeded = (data) => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD_BY_ADDRESS_SUCCEEDED,
    data
  };
};

export const getThreadByAddressFailed = err => {
  return {
    type: actiontypes.THREEBOX_GET_THREAD_BY_ADDRESS_FAILED,
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
