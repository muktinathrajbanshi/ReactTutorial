import React from "react";
import web from "../src/Images/aboutpage.png";
import Common from "./Common";
const About = () => {
    return(
        <>
            <Common 
            name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"
             />
        </>
    );
};

export default About;