import {put, takeLatest, all} from "redux-saga/effects";

import * as api from "../../api";

import * as actions from "./torusActions";
import * as actiontypes from "./actiontypes";

function* connect() {
  try {
    yield api.torusApi.initialize();
    yield put(actions.connectSucceeded());
  } catch (err) {
    let errorMsg = typeof err === "string" ? err : err.message;
    yield put(actions.connectFailed(errorMsg));
  }
}

function* getPk(action) {
  try {
    let pk = yield api.torusApi.getPublicAddress(action.data.verifier, action.data.verifierId);
    yield put(actions.getPkSucceeded(pk));
  } catch (err) {
    let errorMsg = typeof err === "string" ? err : err.message;
    yield put(actions.getPkFailed(errorMsg));
  }
}

function* torusSaga() {
  yield all([takeLatest(actiontypes.TORUS__CONNECT, connect), takeLatest(actiontypes.TORUS__GET_PK, getPk)]);
}

export default torusSaga;
