import React from "react";
import {connect} from "react-redux";
import {Card, MetaMaskButton, Button} from "rimble-ui";

import * as api from "../../api";
import * as metamaskActions from "../../store/metamask/metamaskActions";
import * as torusActions from "../../store/torus/torusActions";

class LoginOverlay extends React.Component {
  componentDidMount() {
    if (api.torusApi.isPageUsingTorus()) {
      this.props.torusConnect();
    }
  }

  render() {
    return (
      <div id="LoginOverlay">
        <div className="loginCard">
          <Card width={"600px"} mx={"auto"} px={4}>
            <svg width="228px" height="36px" viewBox="0 0 228 36" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Colour-palette" transform="translate(-786.000000, -878.000000)">
                  <g id="Group" transform="translate(787.000000, 872.000000)">
                    <line
                      x1="3.22182305"
                      y1="39.5055406"
                      x2="2.7805714"
                      y2="10.0088408"
                      id="Line"
                      stroke="#526EEC"
                      strokeWidth="4"
                      strokeLinecap="square"
                      transform="translate(3.482654, 24.706955) rotate(0.855097) translate(-3.482654, -24.706955) "
                    ></line>
                    <line
                      x1="1.73916915"
                      y1="23.432899"
                      x2="19.7371646"
                      y2="23.1642722"
                      id="Line"
                      stroke="#E06395"
                      strokeWidth="4"
                      strokeLinecap="square"
                      transform="translate(10.500000, 23.134313) rotate(0.855097) translate(-10.500000, -23.134313) "
                    ></line>
                    <line
                      x1="2.73916915"
                      y1="8.43289898"
                      x2="20.7371646"
                      y2="8.16427219"
                      id="Line"
                      stroke="#61C5A6"
                      strokeWidth="4"
                      strokeLinecap="square"
                      transform="translate(11.500000, 8.134313) rotate(0.855097) translate(-11.500000, -8.134313) "
                    ></line>
                    <line
                      x1="3.00448264"
                      y1="39.6307774"
                      x2="21.0024781"
                      y2="39.3621506"
                      id="Line"
                      stroke="#FFC650"
                      strokeWidth="4"
                      strokeLinecap="square"
                      transform="translate(11.765313, 39.332192) rotate(0.855097) translate(-11.765313, -39.332192) "
                    ></line>
                    <text
                      id="theroom"
                      fill="#1D294F"
                      fontFamily="CourierNewPSMT, Courier New"
                      fontSize="48"
                      fontWeight="normal"
                    >
                      <tspan x="25.684596" y="40">
                        theroom
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </svg>
            <div className="loginTagLine">Connect to your wallet:</div>
            <br></br>
            <span className="metaMaskButton">
              <MetaMaskButton.Outline fullWidth disabled={!window.ethereum} onClick={this.props.metamaskConnect}>
                Connect with MetaMask
              </MetaMaskButton.Outline>
            </span>
            <br></br>
            <br></br>

            <Button.Outline className="torusButton" onClick={this.props.torusConnect}>
              Connect with Torus
            </Button.Outline>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  metamask: state.metamask,
  torus: state.torus
});

const mapDispatchToProps = dispatch => ({
  metamaskConnect: () => dispatch(metamaskActions.connect()),
  torusConnect: () => dispatch(torusActions.connect())
});

LoginOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginOverlay);

export default LoginOverlay;
