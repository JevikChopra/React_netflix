import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Netflix from "./netflix";
import Sdata from "./Sdata";
import Amzon from "./amzon"

const favSeries ="netflix";

// const FavS=()=>{

//    if(favSeries==="netjh flix"){
//    return <Netflix/>
//    }
//    else{
//       return <Amzon/>
//    }
// }


// fat arrow function
const App =()=>(
   <>
      <h1 className="heading">Name of series</h1>
      {/* <FavS/> */}
      {favSeries==="netflix" ? <Netflix/>:<Amzon/>}


      {/* <Card 
         imgsrc={Sdata[0].imgscr}
         title={Sdata[0].titlen}
         nam={Sdata[0].sname}
         link={Sdata[0].links} /> */}

      {/* {Sdata.map(function ncard(val) {                  // map function
         return (
            <Card
               key={val.id}
               imgsrc={val.imgscr}
               title={val.titlen}
               name={val.sname}
               link={val.links}
            />
         );
      } */}
      {/* )}; */}


   </>
);
export default App;
