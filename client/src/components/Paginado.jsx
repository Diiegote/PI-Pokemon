import React from "react";
import "./Paginado.css"

export default function Paginado ({pokemonsPerPage, getAllPokemons, paginado}){

    const pageNumbers = []

    for (let i=0; i<Math.ceil(getAllPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <nav>
            <ul className="paginado">
                {pageNumbers &&
                pageNumbers.map(number => (
                    <li className="li" key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
    }





