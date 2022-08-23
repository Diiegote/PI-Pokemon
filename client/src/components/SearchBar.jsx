import React ,{useState} from 'react'
import { getPokemonsByName } from '../Redux/actions'
import { useDispatch } from 'react-redux'

export default function SearchBar(props) {

  const dispatch = useDispatch()
  const [name,setPokemons]=useState("");
  const {setCurrentPage}=props 
  function handleSearch(e){
    setPokemons(e.target.value)
  }
  function handleSubmit(e){
     setCurrentPage(1)
    dispatch(getPokemonsByName(name))
    setPokemons("")
  }
  return (
    <div>
      <input 
      type ="text"
      placeholder='Search...'
      onChange={(e)=>handleSearch(e)}
      />
      <button type = "Submit" onClick={(e)=> handleSubmit(e)}>Search</button>
    </div>
  )
}
