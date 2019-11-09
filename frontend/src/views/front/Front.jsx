import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import ChatArea from "./ChatArea";
import LoginOverlay from "./LoginOverlay";

const Front = props => {
  return (
    <section>
      <div className="wrapper">
        {/* <LoginOverlay></LoginOverlay> */}
        <Sidebar></Sidebar>
        <TopNav></TopNav>
        <ChatArea></ChatArea>
      </div>
    </section>
  );
};

export default Front;
