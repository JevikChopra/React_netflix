import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Amzon=()=>{

return(
    <Card 
    imgsrc={Sdata[1].imgscr}
    title={Sdata[1].titlen}
    nam={Sdata[1].sname}
    link={Sdata[1].links} /> 
    );
}
export default Amzon;