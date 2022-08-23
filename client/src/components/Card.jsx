import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"
// import imgDefault from "../Imagenes/"

export default function Card({ Name, Image, Type,Id,Life}) {
    return (
        <div className="card">
          <div className="imagen">
            <img  src={Image} alt="img not found" height= "250px"/>
            </div>
            <div className="descripcion">
              <Link to={`/pokemons/${Id}`}>
          <button className="CardName">{Name} </button>  
          </Link>
          <h3>{Life}</h3>
            <h3 className="CardType">{Type}</h3>
            </div>
        </div>
    ) 
}