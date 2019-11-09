import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import * as api from "../api";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);

  const composedEnhancers = compose(
    middlewareEnhancer,
    // TODO: remove this in prod build
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );

  const store = createStore(rootReducer, undefined, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  // inject store into apis
  api.testApi.setStore(store);

  return store;
};
