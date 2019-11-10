import React from "react";
import { Card, Button } from 'rimble-ui';
import ethGlobal from './img/ethGlobal.png';
import addRoom from './img/addRoom.png';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <p className="dashboard-title">
          <svg width="228px" height="36px" viewBox="0 0 228 36" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Colour-palette" transform="translate(-786.000000, -878.000000)">
                      <g id="Group" transform="translate(787.000000, 872.000000)">
                          <line x1="3.22182305" y1="39.5055406" x2="2.7805714" y2="10.0088408" id="Line" stroke="#526EEC" stroke-width="4" stroke-linecap="square" transform="translate(3.482654, 24.706955) rotate(0.855097) translate(-3.482654, -24.706955) "></line>
                          <line x1="1.73916915" y1="23.432899" x2="19.7371646" y2="23.1642722" id="Line" stroke="#E06395" stroke-width="4" stroke-linecap="square" transform="translate(10.500000, 23.134313) rotate(0.855097) translate(-10.500000, -23.134313) "></line>
                          <line x1="2.73916915" y1="8.43289898" x2="20.7371646" y2="8.16427219" id="Line" stroke="#61C5A6" stroke-width="4" stroke-linecap="square" transform="translate(11.500000, 8.134313) rotate(0.855097) translate(-11.500000, -8.134313) "></line>
                          <line x1="3.00448264" y1="39.6307774" x2="21.0024781" y2="39.3621506" id="Line" stroke="#FFC650" stroke-width="4" stroke-linecap="square" transform="translate(11.765313, 39.332192) rotate(0.855097) translate(-11.765313, -39.332192) "></line>
                          <text id="theroom" fill="#1D294F" font-family="CourierNewPSMT, Courier New" font-size="48" font-weight="normal">
                              <tspan x="25.684596" y="40">theroom</tspan>
                          </text>
                      </g>
                  </g>
              </g>
          </svg>
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm">
            <Card width={"320px"} mx={"auto"} px={4}>
              <img className="ethGlobal" src={ethGlobal} alt="ethGlobal" />
              <p className="text-center">
                ETHWaterloo
              </p>
              <p className="text-center enterRoomButton">
                <a href="./"><Button>Enter room</Button></a>
              </p>
            </Card>
            </div>
            <div className="col-sm">
              <Card width={"320px"} mx={"auto"} px={4}>
                <img className="addRoom" src={addRoom} alt="addRoom" />
                <p className="text-center">
                  New room
                </p>
                <p className="text-center enterRoomButton">
                  <Button>Create room</Button>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
