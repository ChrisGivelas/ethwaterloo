import * as actiontypes from "./actiontypes";

export const test = message => {
  return {
    type: actiontypes.TEST,
    data: {
      message
    }
  };
};

export const testSucceeded = () => {
  return {
    type: actiontypes.TEST_SUCCEDED
  };
};

export const testFailed = err => {
  return {
    type: actiontypes.TEST_FAILED,
    data: {
      message: err
    }
  };
};
