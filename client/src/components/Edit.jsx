import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";
import { editar, getAllTypes, getPokemonsId } from "../Redux/actions";


export default function EditarPoke() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pokemonsId } = useSelector(state => state);
    const history = useHistory()
        const [input, setInput] = useState({
            name: "",
            image: "",
            life: "",
            strength: "",
            defense: "",
            speed: "",
            height: "",
            weight: ""
        })
        useEffect(()=>{
            dispatch(getPokemonsId(id))
            dispatch(getAllTypes())
        },[dispatch,id]);
        
        function handleSubmit (e){
            dispatch(editar(id,input));
            alert("Pokemon editado")
             history.push(`/pokemon/${id}`)

            setInput({
                name: "",
                image: "",
                life: "",
                strength: "",
                defense: "",
                speed: "",
                height: "",
                weight: ""
            })
        }
        function handleChange (e){
            setInput({
                ...input,
                [e.target.name] : e.target.value 
            })
        }
        
        return(
            <div>
             <Link to={`/pokemon/${id}`}><button>Back</button></Link> 
            <form onSubmit={e=>handleSubmit(e)}>
               <div><label>Name:</label><input type="text" value={input.name} placeholder={pokemonsId.name} name="name" onChange={handleChange}/> </div>
                <div><label>Image:</label><input type="text" value={input.image} placeholder={pokemonsId.image} name="image" onChange={handleChange}/></div>
                <div> <label>Life:</label><input type="number" value={input.life} placeholder={pokemonsId.life} name="life" onChange={handleChange}/></div>
                <div><label>Strength:</label><input type="number" value={input.strength} placeholder={pokemonsId.strength} name="strength" onChange={handleChange}/></div>
                <div><label>Defense:</label><input type="number" value={input.defense} placeholder={pokemonsId.defense} name="defense" onChange={handleChange}/></div>
                <div> <label>Speed:</label><input type="number" value={input.speed} placeholder={pokemonsId.speed} name="speed" onChange={handleChange}/></div>
                <div><label>Height:</label><input type="number" value={input.height} placeholder={pokemonsId.height} name="height" onChange={handleChange}/></div>
                <div><label>Weight:</label><input type="number" value={input.weight} placeholder={pokemonsId.weight} name="weight" onChange={handleChange}/></div>
                <button type='submit'>Editar Pokemon</button>
            </form>
        </div>
      )
};