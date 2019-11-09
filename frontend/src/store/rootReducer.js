import {combineReducers} from "redux";

import {testReducer} from "./test/testReducer";
import {torusReducer} from "./torus/torusReducer";
import {walletConnectReducer} from "./walletconnect/walletConnectReducer";

const reducer = combineReducers({
  test: testReducer,
  torus: torusReducer,
  walletConnect: walletConnectReducer
});

export default (state, action) => {
  return reducer(state, action);
};
