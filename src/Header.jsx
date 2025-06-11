import React from "react";
import logo from "./Images/mklogo.png";

const Header = () => {
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" width="70" height="50" />
                <h1> Mukti keep </h1>
            </div>
        </>
    );
};

export default Header;