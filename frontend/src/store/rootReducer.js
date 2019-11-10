import {combineReducers} from "redux";

import {metamaskReducer} from "./metamask/metamaskReducer";
import {testReducer} from "./test/testReducer";
import {torusReducer} from "./torus/torusReducer";
import {walletConnectReducer} from "./walletconnect/walletConnectReducer";
import {threeBoxReducer} from "./3box/3boxReducer";

const reducer = combineReducers({
  test: testReducer,
  metamask: metamaskReducer,
  torus: torusReducer,
  walletConnect: walletConnectReducer,
  threeBox: threeBoxReducer
});

export default (state, action) => {
  return reducer(state, action);
};
