import React from "react";
import {Link} from "react-router-dom";

const NoMatch = props => (
  <section>
    <h2>404 Not Found</h2>
    <div>
      <Link to="/" tabIndex="-1">
        <span>/</span>
      </Link>
    </div>
  </section>
);

export default NoMatch;
