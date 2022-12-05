// import React from "react";
// import {Link} from "react-router-dom";
// import  "./LandingPage.css"


// export default function LandingPage(){
//   return (
//       <div className= "contenedor">
//       <div><h1>Welcome to my pokemon project!</h1>
//       <h2>You will find more than 100 pokemons with their characteristics and you will be able to create your own!</h2>
//       <div className="link">
//      <Link to ="/pokemons">
//       <h3> ¡Go!</h3>
//       </Link>
//       </div>
//       <div><h4>By Diego Martinotti</h4></div>
//       </div>
//     </div>
//   )
// }
 import React from "react";
 import {Link} from "react-router-dom";
 import  "./LandingPage.css"

export default function LandingPage(){
  return (
    <div className="principal">
    <div>
        <div className="title">
          <h1>¡Welcome to my pokemon project! </h1>
          <Link to="/pokemons">
            <div className="btn">
              <span>¡Go!</span>
            </div>
          </Link>
        </div>
      </div>
      </div>
  )
}