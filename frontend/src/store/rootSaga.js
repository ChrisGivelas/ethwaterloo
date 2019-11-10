import {all, call} from "redux-saga/effects";

import metamaskSaga from "./metamask/metamaskSaga";
import testSaga from "./test/testSaga";
import torusSaga from "./torus/torusSaga";
import walletConnectSaga from "./walletconnect/walletConnectSaga";

function* rootSaga() {
  yield all([call(metamaskSaga), call(testSaga), call(torusSaga), call(walletConnectSaga)]);
}

export default rootSaga;
