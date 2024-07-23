import React from "react";

function Card(props){
    return(
        <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <img src={props.img} alt="web image" />
        </div>
    )
}


export default Card