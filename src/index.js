import React from "react";
import { render } from "react-dom";

function HI() {
  return <h1>Hi!</h1>;
}

render(<HI />, document.getElementById("app"));
