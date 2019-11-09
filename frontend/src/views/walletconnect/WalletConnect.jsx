import React from "react";
import {connect} from "react-redux";

import * as actions from "../../store/walletconnect/walletConnectActions";

let WalletConnect = props => {
  return (
    <section>
      <button onClick={props.connect}>connect wallet</button>
      <div>{JSON.stringify(props.walletConnect)}</div>
    </section>
  );
};

const mapStateToProps = state => ({walletConnect: state.walletConnect});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.connect())
});

WalletConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletConnect);

export default WalletConnect;
