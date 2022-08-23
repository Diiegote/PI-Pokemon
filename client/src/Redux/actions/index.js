import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONSID = "GET_POKEMONSID";
export const GET_TYPES = "GET_TYPES";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_POKEMONS_NAME = "GET_POKEMONS_NAME";
export const GET_ORDER_NAME = "GET_ORDER_NAME";
export const GET_ORDER_STRENGTH = "GET_ORDER_STRENGTH";
export const GET_FILTER_CREATE = "GET_FILTER_CREATE";
export const POST_POKEMONS = "POST_POKEMONS";
export const GET_TYPE_LIFE = "GET_TYPE_LIFE";


export function getPokemons() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons")
    return dispatch({
      type: GET_POKEMONS,
      payload: json.data
    })

  }
}


export function getPokemonsId(id) {
  return async function (dispatch) {
    const json = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data
    // console.log("estoy aca",json)

    return dispatch({
      type: GET_POKEMONSID,
      payload: json
    })
  }
}
export function getTypes(payload) {
  return {
    type: GET_TYPES,
    payload,
  }
}
export function getAllTypes() {
  return async function (dispatch) {
    let json = await axios("http://localhost:3001/type")
    return dispatch({
      type: GET_ALL_TYPES,
      payload: json.data
    })
  }
}
export function postPokemons(payload) {
  return async function () {
    let json = await axios.post("http://localhost:3001/pokemons", payload)
    return json
  }
}






export function getPokemonsByName(name) {
  return async function (dispatch) {
    try {
      let json = await axios(`http://localhost:3001/pokemons?name=${name}`)
      return dispatch({
        type: GET_POKEMONS_NAME,
        payload: json.data
      })


    } catch {
      alert("Pokemon No Encontrado")

    }
  }
}

export function getOrderName(payload) {
  return {
    type: GET_ORDER_NAME,
    payload,
  }
}
export function getOrderStrength(payload) {
  return {
    type: GET_ORDER_STRENGTH,
    payload,
  }
}

export function getFilterCreate(payload) {
  return {
    type: GET_FILTER_CREATE,
    payload,
  }
}




