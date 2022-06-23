import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import TextField from "@mui/material/TextField";
import PokemonContainer from './PokemonContainer';
function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
  
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className="App">
      <div className="header">
      <div className="search">
       <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
       </div>

       <div className="options">
       <select name="pokemon" id="pokemon">
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="electric">Electric</option>
        <option value="flying">Flying</option>
       </select>
       </div>

      </div>
       <div className="pokemon__details">
         <PokemonContainer name="Pikachu" id="25" type="Electric"/>
         <PokemonContainer name="Bulbasaur" id="30" type="Dark"/>
         <PokemonContainer name="Bigbulba" id="34" type="Wind"/>
         <PokemonContainer name="Sprout" id="78" type="Fire"/>
         <PokemonContainer name="Sonic" id="39" type="Ice"/>
       </div>
       
       <div className="footer">
         <button type="" className="left">prev</button>
         <button type="" className="right">next</button>
       </div>
    </div>
  );
}

export default App;
