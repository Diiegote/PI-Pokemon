import React, { useState } from 'react'
import { getPokemonsByName } from '../Redux/actions'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={name} onChange={(e) => handleSearch(e)}
        />
        <Button variant="dark" type="Submit" onClick={(e) => handleSubmit(e)}>Search</Button>

      </Form>
    </div>
  )
}
