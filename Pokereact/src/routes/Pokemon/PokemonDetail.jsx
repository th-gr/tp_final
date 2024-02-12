import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function PokemonDetail () {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/cards/${id}`)
      .then(response => {
        setPokemon(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [id]);

  return (
    <>
      <ul>
        <li>Name: {pokemon?.name}</li>  
        <li>Type: {pokemon?.type}</li>
        <li>Level: {pokemon?.level}</li>
        <li>Damage: {pokemon?.damage}</li>
      </ul>
    </>
  )

}

export default PokemonDetail;