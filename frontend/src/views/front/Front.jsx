import React from "react";

const Front = props => {
  return (
    <section>
      <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">

            <svg width="150px" height="23.68px" viewBox="0 0 228 36" version="1.1">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Etheroom" transform="translate(-41.000000, -57.000000)">
                        <g id="Group" transform="translate(42.000000, 51.000000)">
                            <line x1="3.22182305" y1="39.5055406" x2="2.7805714" y2="10.0088408" id="Line" stroke="#526EEC" stroke-width="4" stroke-linecap="square" transform="translate(3.482654, 24.706955) rotate(0.855097) translate(-3.482654, -24.706955) "></line>
                            <line x1="1.73916915" y1="23.432899" x2="19.7371646" y2="23.1642722" id="Line" stroke="#E06395" stroke-width="4" stroke-linecap="square" transform="translate(10.500000, 23.134313) rotate(0.855097) translate(-10.500000, -23.134313) "></line>
                            <line x1="2.73916915" y1="8.43289898" x2="20.7371646" y2="8.16427219" id="Line" stroke="#61C5A6" stroke-width="4" stroke-linecap="square" transform="translate(11.500000, 8.134313) rotate(0.855097) translate(-11.500000, -8.134313) "></line>
                            <line x1="3.00448264" y1="39.6307774" x2="21.0024781" y2="39.3621506" id="Line" stroke="#FFC650" stroke-width="4" stroke-linecap="square" transform="translate(11.765313, 39.332192) rotate(0.855097) translate(-11.765313, -39.332192) "></line>
                            <text id="theroom" fill="#FFFCF5" font-family="CourierNewPSMT, Courier New" font-size="48" font-weight="normal">
                                <tspan x="25.684596" y="40">theroom</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
            </div>

            <ul className="list-unstyled components">
                <p className="roomHeader">Rooms</p>
                <div className="roomList">
                  <li>
                      <a href="#">#ETHBoston</a>
                  </li>
                  <li>
                      <a href="#">#ETHDever</a>
                  </li>
                  <li>
                      <a href="#">#ETHWaterloo</a>
                  </li>
                  <li>
                      <a href="#">#ETHWhatever-you-want</a>
                  </li>
                  <li>
                      <a href="#">+</a>
                  </li>
                </div>
            </ul>
        </nav>
        <div id="content">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
      </div>

    </div>
    </section>
  );
};

export default Front;
