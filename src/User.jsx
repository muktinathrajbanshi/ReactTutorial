import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {name, lname} = useParams();
    return (
        <>
            <h1> user {name} {lname} page </h1>
        </>
    );
};

export default User;