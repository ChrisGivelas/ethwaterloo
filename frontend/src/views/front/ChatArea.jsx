import React from "react";
import {withRouter} from "react-router-dom";
import _ from "lodash";
import Message from "./Message";

class ChatArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: undefined,
    }
  }

  onChange = e => this.setState({input: e.target.value})
  onSubmit = () => {
    const roomName = _.get(this.props, "match.params.roomName");
    console.log(roomName)
    this.props.addMessage(roomName, this.state.input);
    this.setState({
      input: undefined
    });
  }

  componentDidMount() {
    const that = this;
    // Execute a function when the user releases a key on the keyboard
    document.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        if(that.state.input){
          document.getElementById("hiddenSubmit").click();
        }
      }
    },);
  }

  render() {
    const roomName = _.get(this.props, "match.params.roomName");
    const room = _.get(this.props, `rooms[${roomName}]`);

    if (room && room.history) {
      return (
        <div id="content">
          {room.history.map(messageInfo => <Message {...messageInfo} />)}
          <div className="form-group fixed-bottom">
            <input
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder={`Message ${roomName}`}
              onChange={this.onChange}
            />
            <input id="hiddenSubmit" type="hidden" onClick={this.onSubmit}/>
          </div>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default withRouter(ChatArea);
