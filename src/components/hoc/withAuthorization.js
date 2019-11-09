import React from "react";
import {connect} from "react-redux";

const isAuthorized = (roles, authorizedRoles) => {
  switch (authorizedRoles) {
    case "*":
      return true;
    default:
      return false;
  }
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const withAuthorization = authorizedRoles => (WrappedComponent, NotAuthorized = null) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(props => {
    if (isAuthorized(null, authorizedRoles)) {
      return <WrappedComponent {...props} />;
    } else {
      return NotAuthorized ? <NotAuthorized {...props} /> : null;
    }
  });
};

export default withAuthorization;
