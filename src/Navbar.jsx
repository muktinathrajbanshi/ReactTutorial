import React from "react";
import { NavLink, activeClassName } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MuktinathTech</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
           </div>
        </div>
        </div>
        </>
    );
};

export default Navbar;