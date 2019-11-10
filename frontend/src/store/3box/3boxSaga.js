import {put, takeLatest, all} from "redux-saga/effects";
import {ThreeBoxApi} from "../../api/_3BoxApi";

import * as api from "../../api";

import * as actions from "./3boxActions";
import * as actiontypes from './actiontypes';

function* connect(action) {
  try {
    // yield api.threeBoxApi.initialize(action.payload.addr, api.web3Api.web3);
    yield put(actions.connectSucceeded());
    yield
  } catch (err) {
    yield put(actions.connectFailed(err.message));
  }
}

function* public_listSpaces(action) {
  let spaces = yield ThreeBoxApi.listSpaces(action.payload.addr);

  console.log(spaces);
}

function* public_getSpace(action) {
  let space = yield ThreeBoxApi.getSpace(action.payload.addr, action.payload.spaceName);
  console.log(space);
}

function* public_getThread(action) {}

function* public_getThreadByAddress(action) {}

function* threeBoxSaga() {
  yield all([
    takeLatest(actiontypes.THREEBOX_CONNECT, connect),
    takeLatest(actiontypes.THREEBOX_LIST_SPACES, public_listSpaces),
    takeLatest(actiontypes.THREEBOX_GET_SPACE, public_getSpace),
    takeLatest(actiontypes.THREEBOX_GET_THREAD, public_getThread),
    takeLatest(actiontypes.THREEBOX_GET_THREAD_BY_ADDRESS, public_getThreadByAddress)
  ]);
}

export default threeBoxSaga;
