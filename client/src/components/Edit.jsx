import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from "react-router-dom";
import { editar, getAllTypes, getPokemonsId } from "../Redux/actions";
import "./Edit.css"


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
            <div className="contenedor">
            <form onSubmit={e=>handleSubmit(e)}>
               <h4><label>Name: </label><input type="text" value={input.name} placeholder={pokemonsId.name} name="name" onChange={handleChange}/> </h4>
                <h4><label>Image: </label><input type="text" value={input.image} placeholder={pokemonsId.image} name="image" onChange={handleChange}/></h4>
                <h4> <label>Life: </label><input type="number" value={input.life} placeholder={pokemonsId.life} name="life" onChange={handleChange}/></h4>
                <h4><label>Strength: </label><input type="number" value={input.strength} placeholder={pokemonsId.strength} name="strength" onChange={handleChange}/></h4>
                <h4><label>Defense: </label><input type="number" value={input.defense} placeholder={pokemonsId.defense} name="defense" onChange={handleChange}/></h4>
                <h4> <label>Speed: </label><input type="number" value={input.speed} placeholder={pokemonsId.speed} name="speed" onChange={handleChange}/></h4>
                <h4><label> Height: </label><input type="number" value={input.height} placeholder={pokemonsId.height} name="height" onChange={handleChange}/></h4>
                <h4><label> Weight: </label><input type="number" value={input.weight} placeholder={pokemonsId.weight} name="weight" onChange={handleChange}/></h4>
             <Link to={`/pokemon/${id}`}><button >Back</button></Link> 
            <button type='submit'>Edit</button>
            </form>
        </div>
      )
    };