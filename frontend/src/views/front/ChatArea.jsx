import React from "react";
import user1 from './img/user1.png';
import user2 from './img/user2.png';

const ChatArea = props => {
  return (
    <div id="content">
      <br/>
      <p>
        <img className="user1" src={user1} alt="user1" />
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
      <br/>
      <p>
        <img className="user1" src={user2} alt="user2" />
        <span className="username">
          0x94aAe3B68060F76099d26E6B4F07C356367573cD
        </span>
        <span className="timestamp">
          12.23pm
        </span>
        <br></br>
        <span className="messageText">
          Dude that’s disgusting. I have just spend a unique 27 minutes in there
        </span>
      </p>
      <br/>
      <p>
        <img className="user1" src={user1} alt="user1" />
        <span className="username">
          0x005b661B34Cb13E4023A26048eB6440a9e1d611B
        </span>
        <span className="timestamp">
          12.25pm
        </span>
        <br></br>
        <span className="messageText">
          I just spent 37 minutes watching trailers for upcoming ETH hackathons in unicorn flesh breakfasts
        </span>
      </p>
      <br/>

      {/* ----- Bottom text form ----- */}
      <div className="form-group fixed-bottom">
        <input className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Message #ETHWalterloo"></input>
      </div>
    </div>
  )
}

export default ChatArea;



