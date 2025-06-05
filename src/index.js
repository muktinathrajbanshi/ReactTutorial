import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";


ReactDOM.render( 
  <>
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title = "A Netflix Original Series"
      sname = "DARK"
      link = "https://www.netflix.com/in/title/80990668?source=35"
     />
    <Card 
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv3B-eJLx971WKtQG6mFqEe1f8lx8QCPqfw&s"
      title = "A Netflix Original Series"
      sname = "extra curricular"
      link = "https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card
     imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title = "A Netflix Original Series"
      sname = "Stranger Things"
      link = "https://www.netflix.com/in/title/80990668?source=35"
     />
  </>,
   
  document.getElementById("root")
);