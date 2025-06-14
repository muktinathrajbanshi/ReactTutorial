import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
    const {name, lname} = useParams();
    const location = useLocation();
    console.log(location);
    return (
        <>
            <h1> user {name} {lname} page </h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === `/user/muktinath/rajbanshi` ? (
            <button onClick={ () => alert(`you are awesome`) }> Click Me </button>) : null}
        </>
    );
};

export default User;