import React from "react";
function Card(props){
    // console.log(props);

    return (<>

    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="Pic" className="card__img" />
            <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.name}</h3>
            <a href={props.link} target="_blank">
            <button> watch now</button>
            </a>
            </div>
        </div>
    </div>
</>);
}
export default Card;
