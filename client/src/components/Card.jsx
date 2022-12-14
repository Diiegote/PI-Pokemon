import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

export default function Cards({ Name, Image, Type, Id,Str }) {
  return (
    <div key={Id} className="card-container">
    <div className="image-container"><Link to={`/pokemon/${Id}`}> <img src={Image} alt="ImageNotFound"></img></Link></div>
{  typeof Id === "number"? <p># {Id}</p>:<p># {Id.slice(15)}</p>}
   <h1>{Name}</h1>
    <h2>Type: {Type}</h2>
   <h3>Str: {Str}</h3>
    </div>

)
};