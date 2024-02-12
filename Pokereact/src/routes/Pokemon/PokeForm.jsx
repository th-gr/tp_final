import { useState } from "react";
import axios from "axios";

function PokemonForm ({pokemon: pokemonProp, labelProp, fetchData}) {
  const [pokemon, setPokemon] = useState(pokemonProp);

  const handleInputChange = (event, key) => {
    // const {name, value} = event.target.value;

    setPokemon({
      ...pokemon,
      [key]: event.target.value
    })
    console.log("oue", pokemon)
  }

  const updatePokemon = async () => {
    axios.put(`http://localhost:3001/cards/${pokemon.id}`, pokemon)
      .then(() => {
        console.log(pokemon)
        fetchData();  // Fetch the data after updating a pokemon
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  const deletePokemon = async () => {
    axios.delete(`http://localhost:3001/cards/${pokemon.id}`)
      .then(() => {
        fetchData();  // Fetch the data after deleting a pokemon
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <>
      <div>
        {Object.entries(pokemon).map(([key, value]) => (
            <>
              <p>{key}</p>
              <input 
                type="text"
                value={value}
                onChange={e => handleInputChange(e, key)}
              />
            </>
        ))}
        <button onClick={updatePokemon}>Update</button>
        <button onClick={deletePokemon}>Delete</button>
      </div>
    </>
  )
}
PokemonForm.defaultProps = {
  labelProp: "Button"
}


export default PokemonForm;