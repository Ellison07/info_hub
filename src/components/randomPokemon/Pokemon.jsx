import "./Pokemon.css";
import { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const generateRandomPokemon = () => {
      const pokeArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 151) + 1);
      setPokemon(pokeArray);
    };

    generateRandomPokemon();
  }, []);

  return (
    <>
    <div className="PokemonHeader">
    <h1>Random 5 Pokemon</h1>
    </div>
    <div className="RandomPokemonContainer">
      <div className="RandomPokemon">
        {pokemon.map((pokeNum, index) => {
          const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;
          return (
            <div key={index} className="PokemonItem">
              <h1>Pokemon #{pokeNum}</h1>
              <img src={url} alt={`Pokemon #${pokeNum}`} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
