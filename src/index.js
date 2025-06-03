import React from "react";
import ReactDOM from "react-dom";

const fname = "muktinath";
const lname = "rajbanshi";

ReactDOM.render(

  <>
  <h1> {`my name is ${fname} and my last name is ${lname}`}</h1>
  <p> My lucky number is {7+2} </p>

  </>,
  document.getElementById("root")

);
