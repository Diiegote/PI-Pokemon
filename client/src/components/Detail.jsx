import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom";
// import { getPokemonsId } from "../Redux/actions";
import "../components/Detail.css"
import axios from "axios"


export default function Detail() {
  const [poke,setPoke] = useState()
  const dispatch = useDispatch()
  const { id } = useParams()
  // const PokeId = useSelector(state => state.pokemonsId) // me traigo todo lo que esta en el estado de pokemonsId y lo guardo en la constante
  useEffect(() => {
  axios (`http://localhost:3001/pokemons/${id}`)
    .then(response =>{
      setPoke(response.data) 
  })}, [id])



  return poke ?
    (
      // <div className="detail">
      <div className="conteiner">
        <div className="detalle">
          <Link to="/pokemons"><button>Back</button></Link>
          <div className="imagen">
            <div className="containerName">
              <h3>ID: {poke.id}</h3>
              <h3>Name: {poke.name}</h3>
            </div>
            <img src={poke.image} alt="Image Not Found" height="250px" />
          </div>
          <div className="ConteinerDetalle">
            <div className="orderType">
              <div>
                <h3>Type: {poke.types instanceof Array ? poke.types.map(e => e.name).join(", ") : poke.types ? poke.types : "Sin Tipos"}</h3>
              </div>
              <div>
                <h3>Life: {poke.Life ? poke.Life : poke.life ? poke.life : "Sin Life"}</h3>
              </div>
              <div>
                <h3>Strength: {poke.strength}</h3>
              </div>
              <div>
                <h3>Defense: {poke.defense}</h3>
              </div>
            </div>
            <div className="orderDetail">
              <div>
                <h3>Speed: {poke.speed}</h3>
              </div>
              <div>
                <h3>Height: {poke.height}</h3>
              </div>
              <div>
                <h3>Weight: {poke.weight}</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      //  </div>
    ) : <div className="cargando" ><h1>Loading...</h1></div>

}

