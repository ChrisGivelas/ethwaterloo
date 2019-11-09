import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import {configureStore} from "../store/store";
import {ErrorBoundary} from "../components/error/ErrorBoundary";

import Main from "./main/Main";

const store = configureStore();

const App = props => {
  return (
    <Provider store={store}>
      <Router basename={process.env.BASE_NAME}>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
