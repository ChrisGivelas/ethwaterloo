import {combineReducers} from "redux";

import {testReducer} from "./test/testReducer";
import {walletConnectReducer} from "./walletconnect/walletConnectReducer";

const reducer = combineReducers({
  test: testReducer,
  walletConnect: walletConnectReducer
});

export default (state, action) => {
  return reducer(state, action);
};
