import { useState } from "react";
import axios from "axios";

function CreatePokemon ({keys, fetchData}){

  const [pokemon, setPokemon] = useState({})
 
  const handleInputChange = (event, key) => {
    
    setPokemon({
      ...pokemon,
      [key]: event.target.value
    });
  }

  const addPokemon = async () => {
    axios.post("http://localhost:3001/cards", pokemon)
      .then(() => {
        fetchData();  // Fetch the data after creating a pokemon
      })
      .catch(error => {
        console.error(error);
      })
  }
  
  return(
    <>
      {Object.keys(keys).map((key) => (
        // eslint-disable-next-line react/jsx-key
        <input
          type="text"
          value={pokemon[key] || ''}
          placeholder={key}
          onChange={e => handleInputChange(e, key)}
        />
      ))}
      <button onClick={addPokemon}>
        Ajouter
      </button>
    </>
  )
}
CreatePokemon.defaultProps= {
  keys: {
    name: "",
    type: "",
    level: "",
    damage: ""
  }
};


export default CreatePokemon;