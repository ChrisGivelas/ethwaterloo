import React from "react";
import Sidebar from "./Sidebar";

const Front = props => {
  return (
    <section>
      <div className="wrapper">
        <Sidebar></Sidebar>
        <div id="content">
          <div className="top-nav">
            <div>
              <p className="roomHeader"> #ETHWaterloo</p>
              <p className="nav-subtitle">247 eligible roomies, 12 active ︱ This room is open for any ETHWaterloo token holders</p>
            </div>
          </div>
          <p>yo</p>
        </div>
      </div>
    </section>
  );
};

export default Front;
