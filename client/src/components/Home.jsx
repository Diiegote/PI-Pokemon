import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypes, getPokemons, getOrderName, getOrderStrength, getFilterCreate } from "../Redux/actions";
import { getTypes } from "../Redux/actions";
import Paginado from "./Paginado";
import Cards from "./Card";
import "./Home.css"
import "./Paginado.css"
import SearchBar from "./SearchBar";



export default function Home() {

  const dispatch = useDispatch()
  const getAllPokemons = useSelector(state => state.pokemons)
  const Types = useSelector(state => state.allTypes)

  const [order, setOrder] = useState('');
  const [orderStr, setOrderStr] = useState('')



  const [currentPage, setCurrentPage] = useState(1); 
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage; 

  const currentPokemons = getAllPokemons.slice(
    indexOfFirstPokemons,
    indexOfLastPokemons
  );



  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // function handleClick() {
  //   dispatch(getPokemons());
  //   setCurrentPage(1);
  // }


  useEffect(() => {
    dispatch(getPokemons());
  },[dispatch])

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch])


  function handleFilterByType(e) {
    dispatch(getTypes(e.target.value))
    setCurrentPage(1)
  }

  function handleOrderAZ(e) {
    dispatch(getOrderName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }
  function handleOrderStr(e) {
    dispatch(getOrderStrength(e.target.value))
    setCurrentPage(1)
    setOrderStr(`Ordenado ${e.target.value}`)
  }
  function handleFilterCreated(e) {
    dispatch(getFilterCreate(e.target.value))
    setCurrentPage(1)
  }


  return (
    <div>
         <div className="logo"><a href="/pokemons"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="NotFound"></img></a></div>
         <SearchBar/>

        <div className="conteiner-select">
         
        <select defaultValue="Api or Created" onChange={(e) => handleFilterCreated(e)}>
            <option disabled>Api or Created</option>
            <option value="All">All </option>
            <option value="Created">Created</option>
            <option value="Api">Api</option>
          </select>
       

          
      <select defaultValue="Order"
        onChange={e => handleOrderAZ(e)}>
        <option disabled >Order-AZ</option>
        <option value='A-Z'>A-Z</option>
        <option value='Z-A'>Z-A</option>
      </select>
     

    
      <select defaultValue="OrderStr"
        onChange={e => handleOrderStr(e)}>
        <option disabled >OrderStr</option>
        <option value="Max-Min">Max-Min</option>
        <option value="Min-Max">Min-Max</option>
      </select>
     

    
      <select defaultValue="AllTypes" onChange={e => handleFilterByType(e)}>
        <option disabled value='AllTypes'>AllTypes</option>
        {Types.map(t => (
          
          <option key={t.id} value={t.name}>{t.name}</option>
          ))}
      </select>
      
      </div>
      <div className="button-create">
       <a href="/createpokemons"> <button>Create your Pokémon</button></a>
      </div>

     
            <div className="container-paginado">
              <Paginado
              pokemonsPerPage={pokemonsPerPage}
              getAllPokemons={getAllPokemons.length}
              paginado={paginado}
              paginaActual={currentPage}
            />
            </div>

            <div className="cards-container">
            {
              currentPokemons.length ?
                currentPokemons?.map(e => {
                  return (
                    <div key={e.id}>
                      <Cards
                        Name={e.name}
                        Image={e.image}
                        Id={e.id}
                        Type={e.types ? e.types : e.types instanceof Object ? e.types.name : "Sin Tipo"}
                        Str={e.strength}
                        Life={e.life}
                        />
                    </div>
                  )
                }) : <div className="cargando"><img src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif" alt="Not Fund"></img></div>
              }
              </div>
              {  <div className="container-paginado">
              <Paginado
              pokemonsPerPage={pokemonsPerPage}
              getAllPokemons={getAllPokemons.length}
              paginado={paginado}
              paginaActual={currentPage}
            />
            </div> }
            </div>
  )
}
