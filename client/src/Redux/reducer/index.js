//import { allPokemons } from "../../../../api/src/Controllers.js/ControllersPokemon"
import { GET_ALL_TYPES, GET_FILTER_CREATE, GET_ID, GET_POKEMONS, GET_POKEMONS_NAME} from "../actions"
import { GET_TYPES } from "../actions"
import { GET_ORDER_NAME } from "../actions"
import { GET_ORDER_STRENGTH } from "../actions"
import { POST_POKEMONS } from "../actions"

const initialState = {
  pokemons: [],
  pokemonsId:[],
  allPokemons: [],
  allTypes: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload

      }
    case GET_ID:
      return {
        ...state,
        pokemonsId: action.payload

      }
    case GET_TYPES:
      const types = state.allPokemons
      const filterByTypes = action.payload === "all" ? types
        : types.filter(e => e.types.includes(action.payload))
      return {
        ...state,
        pokemons: filterByTypes

      }
    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload
      }
    case POST_POKEMONS:
      return {
        ...state,
      }

    case GET_POKEMONS_NAME:

      return {
        ...state,
        pokemons: action.payload

      }
    case GET_ORDER_NAME:
      let order = action.payload === "A-Z" ?
        state.pokemons.sort(function (a, b) {
          if (a.name > b.name) return 1
          if (b.name > a.name) return -1
          return 0
        })
        : state.pokemons.sort(function (a, b) {
          if (a.name > b.name) return -1
          if (b.name > a.name) return 1
          return 0
        })
      return {
        ...state,
        pokemons: order
      }
    case GET_ORDER_STRENGTH:
      let orderStrength = action.payload === "Min-Max" ?
        state.pokemons.sort(function (a, b) {
          if (a.strength > b.strength) return 1
          if (b.strength > a.strength) return -1
          return 0
        })
        : state.pokemons.sort(function (a, b) {
          if (a.strength > b.strength) return -1
          if (b.strength > a.strength) return 1
          return 0
        })
      return {
        ...state,
        pokemons: orderStrength
      }
    case GET_FILTER_CREATE:
      const allCreate = state.allPokemons;
      const created_Filter = action.payload === 'Created' ? allCreate.filter(e => typeof e.id === "string")
        : allCreate.filter(e => typeof e.id === "number")
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : created_Filter
      }
    default:
      return state
  }

}

export default rootReducer
