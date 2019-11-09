import {put, takeLatest, select} from "redux-saga/effects";

import * as api from "../../api";

import * as actions from "./torusActions";
import * as actiontypes from "./actiontypes";

import * as threeBoxActions from "../3box/3boxActions";

function* connect() {
  try {
    yield api.torusApi.initialize();
    yield put(actions.connectSucceeded());
    yield put(actions.getPk());

    //Initialize 3box
    let pk = yield select(state => state.torus.pk);
    yield put(threeBoxActions.connect(pk));
  } catch (err) {
    err = typeof err === "string" ? err : err.message;
    yield put(actions.connectFailed(err));
  }
}

function* getPk() {
  try {
    let pk = yield api.torusApi.getPublicAddress();
    yield put(actions.getPkSucceeded(pk));
  } catch (err) {
    err = typeof err === "string" ? err : err.message;
    yield put(actions.getPkFailed(err));
  }
}

function* torusSaga() {
  yield takeLatest(actiontypes.TORUS__CONNECT, connect);
  yield takeLatest(actiontypes.TORUS__GET_PK, getPk);
}

export default torusSaga;
