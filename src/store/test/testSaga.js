import {put, takeLatest} from "redux-saga/effects";

import * as api from "../../api";
import * as actions from "./testActions";
import * as actiontypes from "./actiontypes";

function* test() {
  try {
    let res = yield api.testApi.test();
    actions.testSucceeded(res);
  } catch (err) {
    yield put(actions.testFailed(err.message));
  }
}

function* testSaga() {
  yield takeLatest(actiontypes.TEST, test);
}

export default testSaga;
