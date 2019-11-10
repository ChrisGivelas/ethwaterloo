import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";
import ChatArea from "../front/ChatArea";

import fakeData from '../../fakeData';

console.log(fakeData);

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Front} />
          <Route path="/torus" component={Torus} />
          <Route path="/walletconnect" component={WalletConnect} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/room/:roomName" component={ChatArea}/>

          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

export default Main;
