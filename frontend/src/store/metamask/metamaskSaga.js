import {put, takeLatest, all} from "redux-saga/effects";

import * as api from "../../api";

import * as actions from "./metamaskActions";
import * as actiontypes from "./actiontypes";

function* connect() {
  try {
    yield api.metamaskApi.initialize();
    yield put(actions.connectSucceeded());
  } catch (err) {
    let errorMsg = typeof err === "string" ? err : err.message;
    yield put(actions.connectFailed(errorMsg));
  }
}

function* getPk(action) {
  try {
    let pk = yield api.metamaskApi.getPublicAddress(action.data.verifier, action.data.verifierId);
    yield put(actions.getPkSucceeded(pk));
  } catch (err) {
    let errorMsg = typeof err === "string" ? err : err.message;
    yield put(actions.getPkFailed(errorMsg));
  }
}

function* metamaskSaga() {
  yield all([takeLatest(actiontypes.METAMASK__CONNECT, connect), takeLatest(actiontypes.METAMASK__GET_PK, getPk)]);
}

export default metamaskSaga;
