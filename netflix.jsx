import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Netflix=()=>{

return(
    <Card 
    imgsrc={Sdata[0].imgscr}
    title={Sdata[0].titlen}
    nam={Sdata[0].sname}
    link={Sdata[0].links} /> 
    );
}
export default Netflix;
