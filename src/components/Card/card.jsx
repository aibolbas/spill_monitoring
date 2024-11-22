import React from "react";
import './card.css'

function Card(props) {
    return(
        <>
        <div className="cardmain">
            <div className="line"></div>
            <div className="cardContent">
                <h1>{props.name}</h1>
                <p>{props.des}</p>
            </div>
            
        </div>
        
        </>
    )
}

export default Card