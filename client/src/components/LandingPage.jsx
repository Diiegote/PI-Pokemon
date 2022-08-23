import React from "react";
import {Link} from "react-router-dom";
import  "./LandingPage.css"


export default function LandingPage(){
  return (
    <div className= "background">
    <div>
      <h1 className="titulo">Crea tu propio Pokemon</h1>
      <Link to ="/pokemons">
      <h2 className="a">¡Comenzar!</h2>
      </Link> 
    </div>
    </div>
  )
}