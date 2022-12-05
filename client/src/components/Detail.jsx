import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios"
import { eliminar } from "../Redux/actions";
import "./Detail.css"



export default function Detail() {
  const [poke, setPoke] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory()
  useEffect(() => {
    axios(`http://localhost:3001/pokemon/${id}`)
      .then(response => {
        setPoke(response.data)
      })
  }, [id]);

  function handleDelete(e) {
    dispatch(eliminar(id));
    alert("Pokemon Eliminado")
    history.push("/pokemons")
  };

   
  return poke ?
    (
      <div className="conteiner-detail">
      <div className="conteiner-card-detail">
        <div className="button-back"><a href="/pokemons"><button>Back</button></a></div>
     {poke.name}
        <div className="imagen-pokemon"><img src={poke.image} alt="Image Not Found" height="165px" /></div>
        { <div className="poke-types">
          {poke.types instanceof Array ? poke.types.map(e => e.name).join(", ") : poke.types ? poke.types : "Sin Tipos"}  </div> }
          <div className="id">N° {id}</div>
        <div className="details-pokemons">
            <div>HP: {poke.Life ? poke.Life : poke.life ? poke.life : "Sin Life"}</div> 
          <div> Strength: {poke.strength} </div>
          <div> Defense: {poke.defense} </div>
          <div> Speed: {poke.speed}</div>
          <div> Height: {poke.height}</div>
          <div> Weight: {poke.weight}</div>
          </div>
        <div className="button-dl-ed">
        {
          typeof poke?.id === "string" ?
            <button onClick={handleDelete}>Delete</button> : <></>
        }
        {
          typeof poke?.id === "string" ?
            <Link to={`/pokemonsEdit/${id}`}><button>Edit</button></Link> : <></>
        }
        </div>
      </div>
      </div>
    ) : <div className="cargandop"><img src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"></img></div>

}

