import React from "react";
import {connect} from "react-redux";

import * as api from "../../api";
import * as actions from "../../store/torus/torusActions";

class Torus extends React.Component {
  componentDidMount() {
    if (api.torusApi.isPageUsingTorus()) {
      this.props.connect();
    }
  }

  render() {
    if (api.torusApi.isPageUsingTorus()) {
      if (this.props.torus.isConnected) {
        return <div>{this.props.torus.pk}</div>;
      }
    }

    return (
      <section>
        <div>
          <button onClick={this.props.connect}>Start using Torus</button>
        </div>
        <div></div>
      </section>
    );
  }
}

const mapStateToProps = state => ({torus: state.torus});

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(actions.connect())
});

Torus = connect(
  mapStateToProps,
  mapDispatchToProps
)(Torus);

export default Torus;
