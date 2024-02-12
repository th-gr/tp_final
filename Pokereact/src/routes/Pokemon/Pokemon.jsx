import { useEffect, useState } from "react";
import axios from "axios";
import PokeForm from "./PokeForm.jsx";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  const [isEdit, setIsEdit] = useState(false);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/cards")
      .then((response) => {
        setPokemons(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "exit" : "Edit"}
      </button>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
        
          <h1>{pokemon.name}</h1>

          {isEdit ? (
            <PokeForm pokemon={pokemon} fetchData={fetchData} />
          ) : (
            // Créer un composant swag
            <ul>
              <li>Type: {pokemon.type} </li>
              <li>Level: {pokemon.level} </li>
              <li>Damage: {pokemon.damage} </li>
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

export default Pokemon;
