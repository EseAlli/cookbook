import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="loading..."
      style={{
        width: "200px",
        marginLeft: "720px",
        marginTop: "300px",
        display: "block",
      }}
    />
  </Fragment>
);

export default Spinner;
