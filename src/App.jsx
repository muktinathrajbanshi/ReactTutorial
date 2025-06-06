import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

// const FavS = () => {

//     if(favSeries === "netflix") {
//        return <Netflix />;
//     }else {
//         return <Amazon />
//     }
// }

const App = () => ( 
  <>
    <h1 className="heading_style"> List of top 6 Netflix Series in 2020 </h1>
    {/* <FavS /> */}

    { (favSeries === "netflix")? <Netflix /> : <Amazon /> }

  </>
   
);

export default App;