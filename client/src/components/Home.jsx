import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { getAllTypes, getPokemons,getOrderName ,getOrderStrength, getFilterCreate,getLife} from "../Redux/actions";
//import { GET_POKEMONS } from "../Redux/actions";
import { getTypes } from "../Redux/actions";
import Paginado from "./Paginado";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./Home.css"


export default function Home (){

    const dispatch = useDispatch()
    const getAllPokemons= useSelector(state => state.pokemons) // me traigo todo lo que esta en el estado de pokemons y lo guardo en la constante
    const Types = useSelector(state => state.allTypes)

    const [order,setOrder]= useState('');
    const [orderStr,setOrderStr] = useState('')



    const [currentPage, setCurrentPage] = useState(1); // setcurrentpage seteo en 1, 
    const [pokemonsPerPage] = useState(12);
    const indexOfLastPokemons= currentPage * pokemonsPerPage; // 12
    const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage; // 0

    const currentPokemons = getAllPokemons.slice(
    indexOfFirstPokemons,
    indexOfLastPokemons
  );

   

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    

    //me traigo del estado las recetas
    useEffect(() =>{
        dispatch(getPokemons());
    },[dispatch]) // para que no se genere un bucle infinito
    
    useEffect(() =>{
        dispatch(getAllTypes());
    },[dispatch]) 

    function handleClick(){
        dispatch(getPokemons())
        setCurrentPage(1)
    }
    
    function handleFilterByType (e){
        dispatch(getTypes(e.target.value))
        setCurrentPage(1)
    }

    function handleOrderAZ (e){
      dispatch (getOrderName(e.target.value))
      setCurrentPage(1)
      setOrder(`Ordenado ${e.target.value}`)
    }
    function handleOrderStr (e){
      dispatch (getOrderStrength(e.target.value))
      setCurrentPage(1)
      setOrderStr(`Ordenado ${e.target.value}`)
    }
    function handleFilterCreated(e){
      dispatch(getFilterCreate(e.target.value))
      setCurrentPage(1)
    }


    return (

      <div className="home">
        <div className="serch">
          <div className="a">
  <button className="btn"> <Link to = "/createpokemons">Create Pokemon</Link></button>
    </div>
    <h1 className="page"> Pokemons Page</h1>
    <div className="a">
        <SearchBar  setCurrentPage={setCurrentPage}/>
        </div>
    <button className="btn" onClick= {handleClick}> 
    Reload Pokemons
    </button>
    <div className="b">
    <select defaultValue="Api or Created" onChange={(e)=> handleFilterCreated(e)}>
      <option disabled>Api or Created</option>
      <option value = "All">All </option>
      <option value = "Created">Created</option>
      <option value = "Api">Api</option>
    </select>
    <div>
        <select defaultValue="Order"
        onChange={e =>handleOrderAZ(e)}>
        <option disabled >Order</option>
            <option value='A-Z'>A-Z</option>
            <option value= 'Z-A'>Z-A</option>
        </select>
             <select defaultValue="OrderStr"
        onChange={e =>handleOrderStr(e)}>
        <option disabled >OrderStr</option>
            <option value="Max-Min">Max-Min</option>
            <option value= "Min-Max">Min-Max</option>
        </select>


        <select defaultValue = "AllTypes" onChange={e=>handleFilterByType(e)}>
            <option disabled value='AllTypes'>AllTypes</option>
           {Types.map(t=>(
             
             <option key={t.id} value = {t.name}>{t.name}</option>
           ))}
            </select>
  <Paginado
pokemonsPerPage={pokemonsPerPage}
getAllPokemons={getAllPokemons.length}
paginado={paginado}
/>
</div>
      <div className="cards">
          {
             currentPokemons?
             currentPokemons.map(e => {
              return (
                <div key={e.id}>
                  {/* <Link to={`/pokemons/${e.id}`}> */}
                    <Card 
                 Name=  {e.name}
                 Image= {e.image} 
                 Id= {e.id}
                 Type={e.types? e.types: e.types instanceof Object ? e.types.name: "Sin Tipo"}
                  />
                  {/* </Link> */}
                </div>
                
                )
              }) : <div>
                <h2>Cargando...</h2>
                </div>
            }
              </div>
              </div>
              </div>
              </div>
              )
            }
            