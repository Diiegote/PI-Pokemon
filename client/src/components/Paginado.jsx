import React from "react";
import "./Home.css"

export default function Paginado({ pokemonsPerPage, getAllPokemons, paginado, paginaActual }) {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(getAllPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <div>
            <button className="paginaActual">{paginaActual}</button>
            <div className="paginado">
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <div key={number}>
                            <button onClick={() => paginado(number)}>{number}</button>
                        </div>
                    ))}

            </div>
        </div>
    )
}





