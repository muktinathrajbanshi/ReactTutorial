import React from "react";

function App() {
    let curDate = new Date(2025, 6, 3, 5);
curDate = curDate.getHours();
let greeting = "";

const cssStyle = { };

// const greet = "Hello Sir,";

if(curDate >=1 && curDate <12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate>=12 && curDate < 19) {
  greeting = " Good Afternoon ";
  cssStyle.color = "orange";

} else {
  greeting = "Good Night";
  cssStyle.color = "black";

}

return (
    <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}> { greeting } </span>
      </h1>
    </div>
    </>
);

}

export default App;