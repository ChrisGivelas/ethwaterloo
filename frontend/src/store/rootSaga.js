import {all, call} from "redux-saga/effects";

import testSaga from "./test/testSaga";
import walletConnectSaga from "./walletconnect/walletConnectSaga";

function* rootSaga() {
  yield all([call(testSaga), call(walletConnectSaga)]);
}

export default rootSaga;
