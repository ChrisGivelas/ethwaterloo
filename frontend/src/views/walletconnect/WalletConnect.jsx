import React from "react";
import {connect} from "react-redux";

import * as actions from "../../store/walletconnect/walletConnectActions";

class WalletConnect extends React.Component {
  render() {
    return (
      <section>
        <button onClick={this.props.connect}>connect wallet</button>
        <div>{JSON.stringify(this.props.walletConnect)}</div>
      </section>
    );
  }
}

const mapStateToProps = state => ({walletConnect: state.walletConnect});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.connect())
});

WalletConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletConnect);

export default WalletConnect;
