import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import produce from "immer";
import {connect} from "react-redux";

import Front from "../front/Front";
import Dashboard from "../dashboard/Dashboard";
import Torus from "../torus/Torus";
import WalletConnect from "../walletconnect/WalletConnect";
import ChatArea from "../front/ChatArea";

import fakeData, {currentUser, generateFakeTimestamp} from "../../fakeData";
import {web3Api} from "../../api";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: fakeData
    };
  }

  addMessage = (roomName, msg) => {
    this.setState(
      produce(this.state, draft => {
        draft.rooms[roomName].history.push({
          ...currentUser,
          timestamp: generateFakeTimestamp(),
          addr: web3Api.publicAddress,
          text: msg
        });
      })
    );
  };

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route exact path="/torus" component={Torus} />
          <Route exact path="/walletconnect" component={WalletConnect} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/room/:roomName"
            component={({match}) => <ChatArea rooms={this.state.rooms} match={match} addMessage={this.addMessage} />}
          />

          <Redirect to="/" />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  addr: state.torus.pk
});

export default connect(mapStateToProps)(Main);
