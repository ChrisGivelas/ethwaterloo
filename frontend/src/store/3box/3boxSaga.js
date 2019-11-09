import {put, takeLatest} from "redux-saga/effects";

import * as api from "../../api";

import * as actiontypes from "./actiontypes";

function* connect(actions) {
  try {
    yield api.threeBoxApi.initialize(actions.payload.addr, api.torusApi.torus.provider);
    yield put(actions.connectSucceeded());
  } catch (err) {
    yield put(actions.connectFailed(err.message));
  }
}

function* threeBoxSaga() {
  yield takeLatest(actiontypes.THREEBOX_CONNECT, connect);
}

export default threeBoxSaga;
