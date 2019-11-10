import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";
import ChatArea from "../front/ChatArea";

import fakeData from "../../fakeData";

console.log(fakeData);

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/torus" component={Torus} />
          <Route exact path="/walletconnect" component={WalletConnect} />
          <Route exact path="/dashboard" component={Front} />
          <Route exact path="/room/:roomName" component={ChatArea} />

          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default Main;
