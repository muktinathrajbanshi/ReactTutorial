import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    const [image, setImage] = useState("");
    useEffect(() => {
        // alert("hi");
        async function getData(){
            const res = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`)
            setName(res.data.name);
            setMoves(res.data.name.length);
            setImage(res.data.sprites.front_default);
        }
        getData();
    }, [num]);

    return (
        <>
            <h1> you choose <span style={{color:"red"}}> {num} value </span></h1>
            <h1> My name is <span style={{color:"red"}}> {name} </span></h1>
            <h1> I have <span style={{color:"red"}}> {moves} moves </span></h1>
            {image && <img src={image} alt={name} style={{ width: "400px", height: "auto", marginLeft: "620px" }} />}
            <br />
           <select value={num} onChange={(event) => {
            setNum(event.target.value);
           }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>  
            <option value="5">5</option>
           </select>
        </>
    );
};

export default ComA;