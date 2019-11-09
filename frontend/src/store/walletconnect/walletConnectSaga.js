import {put, takeLatest} from "redux-saga/effects";

import * as api from "../../api";

import * as actions from "./walletConnectActions";
import * as actiontypes from "./actiontypes";

function* connect() {
  try {
    yield api.walletConnectApi.initialize();
  } catch (err) {
    yield put(actions.connectFailed(err.message));
  }
}

function* walletConnectSaga() {
  yield takeLatest(actiontypes.WALLETCONNECT_CONNECT, connect);
}

export default walletConnectSaga;
