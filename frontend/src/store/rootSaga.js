import {all, call} from "redux-saga/effects";

import testSaga from "./test/testSaga";
import torusSaga from "./torus/torusSaga";
import walletConnectSaga from "./walletconnect/walletConnectSaga";

function* rootSaga() {
  yield all([call(testSaga), call(torusSaga), call(walletConnectSaga)]);
}

export default rootSaga;
