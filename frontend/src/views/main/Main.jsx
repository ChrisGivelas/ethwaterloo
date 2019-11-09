import React from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";

import withAuthorization from "../../components/hoc/withAuthorization";

import Forbidden from "./components/Forbidden";
import NoMatch from "./components/NoMatch";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";

const Links = props => (
  <div className="links">
    <ul>
      <li>
        <Link to="/">front</Link>
      </li>
      <li>
        <Link to="/torus">torus</Link>
      </li>
      <li>
        <Link to="/walletconnect">walletconnect</Link>
      </li>
      <li>
        <Link to="/dashboard">dashboard</Link>
      </li>
    </ul>
  </div>
);

const Main = props => (
  <main>
    <Switch>
      <Route exact path="/404" component={NoMatch} />

      <Route exact path="/" component={withAuthorization("*")(Front)} />
      <Route exact path="/torus" component={withAuthorization("*")(Torus)} />
      <Route exact path="/walletconnect" component={withAuthorization("*")(WalletConnect)} />
      <Route path="/dashboard" component={withAuthorization(["user"])(Dashboard, Forbidden)} />

      <Redirect to="/404" />
    </Switch>
    {/* <Links /> */}
  </main>
);

export default Main;
