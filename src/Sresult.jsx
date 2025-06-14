import React from "react";


const Sresult = (props) => {
    const img = `https://picsum.photos/400/300?${props.name}`;
    return(
        <>
            <div className="image_style">
                <img src={img} alt="search" />
            </div>
        </>
    );
};

export default Sresult;