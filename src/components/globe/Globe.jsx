import React from "react";
import './globe.css'

function Globe () {
  return(
    <>
      <img className="Map" src={process.env.PUBLIC_URL + '/pic/map.jpg'} />
      <div className="singapore dot">
        <img className="logotyp" src={process.env.PUBLIC_URL + '/pic/singapour.jpg'} />
        <div className="tex">Tons of Slop: Shell Scrambles After Major Oil Leak in Singapore Waters</div>
      </div>
      <div className="USA dot"></div>
      <div className="bermuda dot"></div>
      <div className="bertwoda dot"></div>
      <div className="brazil dot"></div>
      <div className="spain dot"></div>
      <div className="africa dot"></div>
      <div className="uar dot"></div>
      <div className="eqypt dot"></div>
      <div className="kaspi dot"></div>
    </>
    
    
  )
  
}

export default Globe