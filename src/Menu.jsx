import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
        <>
        <div className="navlink">
        <NavLink exact activeClassName="active_class" to="/"> About Us </NavLink>
        <NavLink activeClassName="active_class" to="/service"> Services </NavLink>
        <NavLink activeClassName="active_class" to="/search"> Search </NavLink>
        <NavLink activeClassName="active_class" to="/user/muktinath/rajbanshi"> User </NavLink>
        <NavLink activeClassName="active_class" to="/contact"> Contact Us </NavLink>
        </div>

        </>
    );
};

export default Menu;