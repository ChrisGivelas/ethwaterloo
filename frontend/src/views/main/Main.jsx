import React from "react";
import { connect } from "react-redux";
import {Link, Redirect, Route, Switch} from "react-router-dom";

import withAuthorization from "../../components/hoc/withAuthorization";

import Forbidden from "./components/Forbidden";
import NoMatch from "./components/NoMatch";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";

import {web3Api} from "../../api";
import * as threeBoxActions from '../../store/3box/3boxActions';

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

class Main extends React.Component {
  componentDidMount() {
      // this.props.initializeThreeBox(web3Api.getPublicAddress());
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/404" component={NoMatch} />

          <Route exact path="/" component={withAuthorization("*")(Front)} />
          <Route exact path="/torus" component={withAuthorization("*")(Torus)} />
          <Route exact path="/walletconnect" component={withAuthorization("*")(WalletConnect)} />
          <Route path="/dashboard" component={withAuthorization("*")(Dashboard, Forbidden)} />

          <Redirect to="/" />
        </Switch>
        {/* <Links /> */}
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initializeThreeBox: (pubKey) => dispatch(threeBoxActions.connect(pubKey))
})

export default connect(null, mapDispatchToProps)(Main);
