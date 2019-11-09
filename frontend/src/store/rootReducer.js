import {combineReducers} from "redux";

import {testReducer} from "./test/testReducer";
import {torusReducer} from "./torus/torusReducer";
import {walletConnectReducer} from "./walletconnect/walletConnectReducer";
import {threeBoxReducer} from './3box/3boxReducer';

const reducer = combineReducers({
  test: testReducer,
  torus: torusReducer,
  walletConnect: walletConnectReducer,
  threeBox: threeBoxReducer
});

export default (state, action) => {
  return reducer(state, action);
};
