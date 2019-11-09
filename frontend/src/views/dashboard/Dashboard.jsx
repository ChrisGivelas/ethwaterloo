import React from "react";
import {connect} from 'react-redux';

import Spinner from '../../components/Spinner';

class Dashboard extends React.Component {
  render() {
    const {publicInfo, privateInfo} = this.props;
    if (!publicInfo || !privateInfo) {
      return <Spinner />;
    } else {
      console.log("publicInfo:", publicInfo);
      console.log("privateInfo:", privateInfo);
      return <React.Fragment />;
    }
  }
}

const mapStateToProps = state => ({publicInfo: state.public, privateInfo: state.private});

export default connect(mapStateToProps)(Dashboard);
