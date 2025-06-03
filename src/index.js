import React from "react";
import ReactDOM from "react-dom";

const name = "muktinath";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();


ReactDOM.render(

  <>
  <h1>Hello, My name is {name}</h1>
   <p>Current Date is = {date}</p>
    <p>Current Time is = {time}</p>

  </>,

 document.getElementById("root")

);