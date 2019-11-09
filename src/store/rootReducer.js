import {combineReducers} from "redux";

import {testReducer} from "./test/testReducer";

const reducer = combineReducers({
  test: testReducer
});

export default (state, action) => {
  return reducer(state, action);
};
