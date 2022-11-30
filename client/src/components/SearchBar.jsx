import React, { useState } from 'react'
import { getPokemonsByName } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import "./SearchBar.css"

export default function SearchBar(props) {

  const dispatch = useDispatch()
  const [name, setPokemons] = useState("");
  const { setCurrentPage } = props
  function handleSearch(e) {
    setPokemons(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getPokemonsByName(name))
    setPokemons("")
    setCurrentPage(1)
  }
  return (
    <div className='search-bar'>
       <input 
      type ="text"
      placeholder='Search...'
      onChange={(e)=>handleSearch(e)}
      />
      <button className='botom' type = "Submit" onClick={(e)=> handleSubmit(e)}>Search</button>
    </div>
  )
}
