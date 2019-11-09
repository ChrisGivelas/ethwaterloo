import React from "react";

const ChatArea = props => {
  return (
    <div id="content">
      <p>
        <span className="username">
          0x005b661B34Cb13E4023A26048eB6440a9e1d611B
        </span>
        <span className="timestamp">
          12.20pm
        </span>
        <br></br>
        <span className="messageText">
          Does anyone know where the bathroom is? I have been dying for 27 hours!!
        </span>
      </p>
      <div className="form-group fixed-bottom">
        <input className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Message #ETHWalterloo"></input>
      </div>
    </div>
  )
}

export default ChatArea;



