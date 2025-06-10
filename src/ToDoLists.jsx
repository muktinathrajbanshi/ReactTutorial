import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ToDoLists = () => {

   return (
      <>
         <div className="main_div">
            <div className="center_div">
               <br />
               <h1> To Do List </h1>
               <br />
               <input type="text" 
               placeholder="Add an Items"
                />
                <Button className="newBtn">
                  <AddIcon />
                </Button>
            </div>
         </div>
      </>
   );

};

export default ToDoLists;