import React from "react";
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import ChatArea from "./ChatArea";
import LoginOverlay from "./LoginOverlay";

import * as dFuseApi from "../../api/_DFuseApi";

class Front extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.torus.isConnected !== this.props.torus.isConnected &&
      this.props.metamask.isConnected !== this.props.metamask.isConnected
    ) {
      dFuseApi.checkWalletForKey(this.props.torus.pk || this.props.metamask.pk, null).then(() => {
        this.setState({allowed: true});
      });
    }
  }

  render() {
    return (
      <section>
        <div className="wrapper">
          {/* {!this.props.torus.isConnected && !this.props.metamask.isConnected && this.state.allowed && <LoginOverlay />} */}
          <Sidebar />
          <TopNav />
          <ChatArea />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({torus: state.torus, metamask: state.metamask});

Front = connect(mapStateToProps)(Front);

export default Front;
