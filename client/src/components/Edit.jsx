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
            <div className="container-edit">
            <div className="container-items">
            <form className="container-form" onSubmit={e=>handleSubmit(e)}>
            <Link to={`/pokemon/${id}`}><button>Back</button></Link> 
               <label className="name">Name</label> <input type="text" value={input.name} placeholder={pokemonsId.name} name="name" onChange={handleChange}/>
                <label>Image </label><input type="text" value={input.image} placeholder={pokemonsId.image} name="image" onChange={handleChange}/>
                 <label>Life </label><input type="number" value={input.life} placeholder={pokemonsId.life} name="life" onChange={handleChange}/>
               <label>Strength </label><input type="number" value={input.strength} placeholder={pokemonsId.strength} name="strength" onChange={handleChange}/>
                <label>Defense </label><input type="number" value={input.defense} placeholder={pokemonsId.defense} name="defense" onChange={handleChange}/>
               <label>Speed </label><input type="number" value={input.speed} placeholder={pokemonsId.speed} name="speed" onChange={handleChange}/>
                <label> Height </label><input type="number" value={input.height} placeholder={pokemonsId.height} name="height" onChange={handleChange}/>
                <label> Weight </label><input type="number" value={input.weight} placeholder={pokemonsId.weight} name="weight" onChange={handleChange}/>
            <div className="button-confirm"><button type='submit'>Confirm</button></div>
            </form>
        </div></div>
      )
    };