import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import withAuthorization from "../../components/hoc/withAuthorization";

import Forbidden from "./components/Forbidden";
import NoMatch from "./components/NoMatch";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";

const Main = props => (
  <Switch>
    <Route exact path="/404" component={NoMatch} />

    <Route exact path="/" component={withAuthorization("*")(Front)} />
    <Route path="/dashboard" component={withAuthorization(["user"])(Dashboard, Forbidden)} />

    <Redirect to="/404" />
  </Switch>
);

export default Main;
