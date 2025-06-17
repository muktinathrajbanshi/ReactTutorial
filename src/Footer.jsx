import React from "react";


const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <>
            <footer className="bg-light d-flex justify-content-center align-items-center pt-2 mb-0 fixed-bottom" style={{height:"40px", lineHeight:"45px"}}>
                <p> © {year} MuktinathTech. All Rights Reserved</p>
            </footer>
        </>
    );
};

export default Footer;