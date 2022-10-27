import { useEffect, useState } from "react";
import { useDispatch} from 'react-redux'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios"
import { eliminar } from "../Redux/actions";



export default function Detail() {
  const [poke,setPoke] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory()
  useEffect(() => {
  axios (`http://localhost:3001/pokemon/${id}`)
    .then(response =>{
      setPoke(response.data) 
  })}, [id]);

  function handleDelete(e){
    dispatch(eliminar(id));
    alert("Pokemon Eliminado")
    history.push("/pokemons")
  };

  return poke ?
    (
      // <div className="detail">
      <div className="conteiner">
        <div>
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
          {
            typeof poke?.id === "string"?
          <button onClick={handleDelete}>Eliminar</button>:<></>
          }
          {
            typeof poke?.id === "string"?
            <Link to={`/pokemonsEdit/${id}`}><button>Editar</button></Link>:<></>
          }
        </div>

      </div>
      //  </div>
    ) : <div></div>

}

