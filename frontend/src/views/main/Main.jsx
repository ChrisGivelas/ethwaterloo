import React from "react";
import {connect} from "react-redux";
import {Link, Redirect, Route, Switch} from "react-router-dom";

import withAuthorization from "../../components/hoc/withAuthorization";

import Forbidden from "./components/Forbidden";
import NoMatch from "./components/NoMatch";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";

import * as threeBoxActions from "../../store/3box/3boxActions";

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
    if(this.props.pk)
      this.props.initializeThreeBox(this.props.pk);
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.pk && this.props.pk){
      this.props.initializeThreeBox(this.props.pk);
    }
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

const mapStateToProps = state => {
  let select = {};

  if(state.torus.pk) {
    select.pk = state.torus.pk;
  }
  // else if(state.metamask.pk) {
  //   select.pk = state.metamask.pk;
  // }

  return select;
};

const mapDispatchToProps = dispatch => ({
  initializeThreeBox: pubKey => dispatch(threeBoxActions.connect(pubKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
