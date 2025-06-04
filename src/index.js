import React from "react";
import ReactDOM from "react-dom";
import myfav, {favprog, myName, myNames} from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>Muktinath</li>
      <li> {myfav} </li>
      <li> {favprog} </li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol>
  </>,
  document.getElementById("root")
);