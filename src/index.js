import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "muktinath";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/220/300";
const img3 = "https://picsum.photos/230/300";
const img4 ="https://picsum.photos/240/300";
const links = "https://muktinathecom.netlify.app/";


ReactDOM.render(
  <>
  <h1 className="heading"> My name is {name} </h1>
  <div className="img_div">
  <img src={img1} alt="lorem images" />
  <img src={img2} alt="lorem images" />
  <img src={img3} alt="lorem images" />
  <a href={links} target="_mukti">
  <img src={img4} alt="lorem images" />
  </a>
  </div>
  </>,

 document.getElementById("root")
);