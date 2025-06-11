import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        // alert("i am clicked")
        setAddItem((prevData) => {
            return [...prevData, note];
        });

        console.log(note);
    };

    return(
        <>
       <Header />
       <CreateNote passNote = {addNote}/>
       <Note />
       <Footer />
        </>
    );
};

export default App;