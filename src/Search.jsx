import React, { useState } from "react";
import Sresult from "./Sresult";



const Search = () => {

    const [img, setImg] = useState(""); 
    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }

    return(
        <>
            <input type="text" placeholder="search here" value={img} onChange={inputEvent} />
            { img === "" ? null :  <Sresult name={img} />}
           
        </>
    );
};

export default Search;