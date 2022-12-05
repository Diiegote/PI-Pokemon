import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllTypes, postPokemons } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../components/PokemonCreate.css";

function validate(input) {
  let errors = {};
  if (!input.name) errors.name = "Obligatory field";
  if (!/^[a-zA-Z]+$/.test(input.name))
    errors.name = "Cannot contain special characters";
  if (
    input.name.includes(1) ||
    input.name.includes(2) ||
    input.name.includes(3) ||
    input.name.includes(4) ||
    input.name.includes(5) ||
    input.name.includes(6) ||
    input.name.includes(7) ||
    input.name.includes(8) ||
    input.name.includes(9) ||
    input.name.includes(0)
  )
    errors.name = "cannot contain numbers";

  if (input.life > 200) errors.life = "The number cannot be greater than 200";
  if (input.life <= 9) errors.life = "The number cannot be less than 10";
  if (!input.life) errors.life = "Obligatory field";

  if (input.strength > 150)
    errors.strength = "The number cannot be greater than 150";
  if (input.strength <= 9)
    errors.strength = "The number cannot be less than 10";
  if (!input.strength) errors.strength = "Obligatory field";

  if (input.defense > 150)
    errors.defense = "The number cannot be greater than 150";
  if (input.defense <= 9) errors.defense = "The number cannot be less than 10";
  if (!input.defense) errors.defense = "Obligatory field";

  if (input.speed > 150) errors.speed = "The number cannot be greater than 150";
  if (input.speed <= 9) errors.speed = "The number cannot be less than 10";
  if (!input.speed) errors.speed = "Obligatory field";

  if (input.height > 150)
    errors.height = "The number cannot be greater than 150";
  if (input.height <= 9) errors.height = "The number cannot be less than 10";
  if (!input.height) errors.height = "Obligatory field";

  if (input.weight > 150)
    errors.weight = "The number cannot be greater than 150";
  if (input.weight < 9) errors.weight = "The number cannot be less than 10";
  if (!input.weight) errors.weight = "Obligatory field";

  if (input.types.length > 2) errors.types = "Can't have more than two types";
  //  if(input.types.includes()) errors.types = "No Podes repetir el typo"

  return errors;
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const { allTypes, pokemons } = useSelector((state) => state);

  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    image: "",
    life: "",
    strength: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const allPoke = pokemons.map((e) => e.name);
    if (!allPoke.includes(e.target.value)) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  }
  function handleSelect(e) {
    if (!input.types.includes(e.target.value)) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
      setErrors(
        validate({
          ...input,
          types: [...input.types, e.target.value],
        })
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      errors.name ||
      errors.life ||
      errors.strength ||
      errors.defense ||
      errors.speed ||
      errors.height ||
      errors.weight ||
      errors.types ||
      !input.name
    ) {
      alert("Pokemon not Created - please complete the inputs");
    } else {
      dispatch(postPokemons(input));
      alert("Pokemon Created");

      setInput({
        name: "",
        image: "",
        life: "",
        strength: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
      history.push("/pokemons");
    }
  }
  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((typ) => typ !== e),
    });
    setErrors(
      validate({
        ...input,
        types: input.types.filter((typ) => typ !== e),
      })
    );
  }

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    // <div className="create">
    
   
    //     <Link to="/pokemons">
    //       <button>Back</button>
    //     </Link>
    //   <form className="container-formulario" onSubmit={(e) => handleSubmit(e)}>
    
    //       <label>Name: </label>
    //       <input
    //         type="text"
    //         value={input.name}
    //         name="name"
    //         onChange={(e) => handleChange(e)}
    //       />
     
    //     {errors.name && <p>{errors.name}</p>}

    //     <label>Image:</label>
    //     <input
    //       type="text"
    //       value={input.image}
    //       height="250px"
    //       name="image"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     <label>Life:</label>
    //     <input
    //       type="number"
    //       value={input.life}
    //       name="life"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.life && <p>{errors.life}</p>}

    //     <label> Strength:</label>
    //     <input
    //       type="number"
    //       value={input.strength}
    //       name="strength"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.strength && <p>{errors.strength}</p>}

    //     <label> Defense:</label>
    //     <input
    //       type="number"
    //       value={input.defense}
    //       name="defense"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.defense && <p>{errors.defense}</p>}

    //     <label> Speed:</label>
    //     <input
    //       type="number"
    //       value={input.speed}
    //       name="speed"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.speed && <p>{errors.speed}</p>}

    //     <label> Height:</label>
    //     <input
    //       type="number"
    //       value={input.height}
    //       name="height"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.height && <p>{errors.height}</p>}

    //     <label> Weight:</label>
    //     <input
    //       type="number"
    //       value={input.weight}
    //       name="weight"
    //       onChange={(e) => handleChange(e)}
    //     />

    //     {errors.weight && <p>{errors.weight}</p>}

    //     <select onChange={(e) => handleSelect(e)}>
    //       {allTypes.map((t) => (
    //         <option value={t.name}> {t.name}</option>
    //       ))}
    //     </select>

    //     <button type="submit">Create Pokemon </button>
    //   </form>
    //   {input.types.map((e) => (
    //     <div>
    //       <p>{e}</p>
    //       <button onClick={() => handleDelete(e)}>X</button>
    //       {errors.types && <p>{errors.types}</p>}
    //     </div>
    //   ))}
    // </div>
 

 <div className="principal-on">
  <div>
    <Link to = "/pokemons">
      <button className="btnForm">Home</button>
      </Link>
      </div>

     
    <div className="formContainer">
      <form onSubmit={e => handleSubmit(e)}>
        <h4 className="titleForm">¡ Create new Pokemon !</h4>
        
        <input
        className="descriptionForm1"
        type ="text"
        value = {input.name}
        name = "name"
        onChange={e =>handleChange(e)}
        placeholder="Name"
        />
        {errors.name && <span className="errorForm">{errors.name}</span>}
        
        <input 
        className="descriptionForm"
        type = "text"
        value = {input.image}
        name = "image"
           onChange={e =>handleChange(e)}
           placeholder="Image"
        />
       <input
        className="descriptionForm1"
        type = "number"
        value = {input.life}
        name = "life"
           onChange={e =>handleChange(e)}
           placeholder="Life">
        </input>
        {errors.life && <span className="errorForm">{errors.life}</span>}
      
      

        <input 
        className="descriptionForm1"
        type = "number"
        value = {input.strength}
        name = "strength"
           onChange={e =>handleChange(e)}
           placeholder="Strength"
        />
        {errors.strength && <span className="errorForm">{errors.strength}</span>}

      
        <input 
        className="descriptionForm1"
        type = "number"
        value = {input.defense}
        name = "defense"
           onChange={e =>handleChange(e)}
           placeholder="Defense"
        />
      
          
        <input 
        className="descriptionForm1"
        type = "number"
        value = {input.speed}
        name = "speed"
           onChange={e =>handleChange(e)}
           placeholder="Speed"
           />
          {errors.speed && <span className="errorForm">{errors.speed}</span>}
          
          <input 
        className="descriptionForm1"
        type = "number"
        value = {input.weight}
        name = "weight"
           onChange={e =>handleChange(e)}
           placeholder="Weight"
           />
          {errors.weight && <span className="errorForm">{errors.weight}</span>}

          <input 
        className="descriptionForm1"
        type = "number"
        value = {input.height}
        name = "height"
           onChange={e =>handleChange(e)}
           placeholder="Height"
           />
          {errors.height && <span className="errorForm">{errors.height}</span>}
          
          
      
      
      <div className="opciones" >

      <select onChange={e => handleSelect(e)}>
        {allTypes.map(t =>(
          <option value = {t.name}> {t.name}</option>
        ))}
      </select>
      </div>
      {input.types.map(e => 
      <div className="opciones">
         <div>
                  <ul>
                        {e}<button
                            type="button"
                            onClick={()=>handleDelete(e)}
                            >X</button>
                  </ul>
                  </div>
  
        {errors.types && <span className="errorForm">{errors.types}</span>}
        </div>
        )}

      <button type = 'submit' className="btnForm">Create</button>
      
      

        
    
      </form>
        </div>
    </div> 
    )
}
