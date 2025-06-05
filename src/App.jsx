import React from "react";
import { add, sub, div, multi } from "./Calc";

function App() {
    return (
    <>
        <ul>
        <li>{add(40,4)} </li>
        <li>{sub(30,3)} </li>
        <li>{multi(10, 3)} </li>
        <li>{div(30, 3)} </li>
        </ul>
    </>
    );  
}

export default App;
  