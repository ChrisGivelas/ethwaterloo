import {all, call} from "redux-saga/effects";

import testSaga from "./test/testSaga";
import torusSaga from "./torus/torusSaga";
import walletConnectSaga from "./walletconnect/walletConnectSaga";
import threeBoxSaga from './3box/3boxSaga';

function* rootSaga() {
  yield all([call(testSaga), call(torusSaga), call(walletConnectSaga), call(threeBoxSaga)]);
}

export default rootSaga;
