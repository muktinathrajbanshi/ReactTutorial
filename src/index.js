import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";


ReactDOM.render( 
  <>

    <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>

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
      <Card
      imgsrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNlOADlPPhcsF2Jfqum0pOAfUFuOhb2dAjRhlw58Lx09fQd6QyOArUkhYf9S6Jnb533zpzVO5R4QYM2X0hRS3vkNtzIvYDLX69NuzSMhB_Tg"
      title = "azon Original Series"
      sname = "the vampire Diaries"
      link = "https://www.netflix.com/in/title/80990668?source=35"
     />
      <Card
     imgsrc="https://i.pinimg.com/474x/7b/19/58/7b19584ec5ffba063a121508e78fe7a4.jpg"
      title = "A Netflix Original Series"
      sname = "My First-2 Love"
      link = "https://www.netflix.com/in/title/80990668?source=35"
     />
  </>,
   
  document.getElementById("root")
);