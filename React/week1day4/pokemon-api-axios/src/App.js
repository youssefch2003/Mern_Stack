import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchpoke = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=807")
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch((error) => {
        console.log("xxxxxxxxxx errorr", error);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchpoke}>FETCH POKEMON</button>
      <ul>
        {pokemon.map((onepok) => (
          <li key={onepok.id}>{onepok.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;