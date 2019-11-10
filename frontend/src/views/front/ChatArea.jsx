import React from "react";
import {withRouter} from "react-router-dom";
import _ from "lodash";
import Message from "./Message";

class ChatArea extends React.Component {
  render() {
    const roomName = _.get(this.props, "match.params.roomName");
    const room = _.get(this.props, `rooms.${roomName}`);

    if (room && room.history) {
      return (
        <div id="content">
          {room.history.map(messageInfo => (
            <Message {...messageInfo} />
          ))}
          <div className="form-group fixed-bottom">
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder={`Message ${roomName}`}
            />
          </div>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default withRouter(ChatArea);
