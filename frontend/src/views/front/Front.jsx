import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const Front = props => {
  return (
    <section>
      <div className="wrapper">
        <Sidebar></Sidebar>
        <TopNav></TopNav>
        <div id="content">

          <p>yo</p>
        </div>
      </div>
    </section>
  );
};

export default Front;
