import {put, takeLatest, all} from "redux-saga/effects";
import ThreeBoxApi from '../../api/_3BoxApi';

import * as api from "../../api";

import * as actiontypes from "./actiontypes";

function* connect(actions) {
  try {
    yield api.threeBoxApi.initialize(actions.payload.addr, api.web3Api.web3);
    yield put(actions.connectSucceeded());
  } catch (err) {
    yield put(actions.connectFailed(err.message));
  }
}

function* public_listSpaces(actions) {
  let spaces = yield ThreeBoxApi.listSpaces(actions.payload.addr);

  console.log(spaces);
}

function* public_getSpace(actions) {
  let space = yield ThreeBoxApi.getSpace(actions.payload.addr, actions.payload.spaceName);

  console.log(space);
}

function* public_getThread(actions) {

}

function* public_getThreadByAddress(actions) {

}

function* threeBoxSaga() {
  yield all([
    takeLatest(actiontypes.THREEBOX_CONNECT, connect),
    takeLatest(actiontypes.THREEBOX_LIST_SPACES, public_listSpaces),
    takeLatest(actiontypes.THREEBOX_GET_SPACE, public_getSpace),
    takeLatest(actiontypes.THREEBOX_GET_THREAD, public_getThread),
    takeLatest(actiontypes.THREEBOX_GET_THREAD_BY_ADDRESS, public_getThreadByAddress),
  ])
}

export default threeBoxSaga;
