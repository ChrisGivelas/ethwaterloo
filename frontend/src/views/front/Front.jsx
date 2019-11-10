import React from "react";
import {connect} from "react-redux";

import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import ChatArea from "./ChatArea";
import LoginOverlay from "./LoginOverlay";

class Front extends React.Component {
  render() {
    return (
      <section>
        <div className="wrapper">
          {!this.props.torus.isConnected && <LoginOverlay />}
          <Sidebar></Sidebar>
          <TopNav></TopNav>
          <ChatArea></ChatArea>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({torus: state.torus});

const mapDispatchToProps = dispatch => ({});

Front = connect(
  mapStateToProps,
  mapDispatchToProps
)(Front);

export default Front;
