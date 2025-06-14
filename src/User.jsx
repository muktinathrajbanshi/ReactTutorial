import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
    const {name, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
        <>
            <h1> user {name} {lname} page </h1>
            <p> My current location is {location.pathname} </p>
            {location.pathname === `/user/muktinath/rajbanshi` ? (
            <button onClick={ () => history.push("/") }> Home Page </button>) : null}
        </>
    );
};

export default User;