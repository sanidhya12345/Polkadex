import React from 'react'
import './PokemonContainer.css';
function PokemonContainer(props) {
    return (
        <div className="container">
            <img src='https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg'/>
            <h2>{props.name}</h2>
            <h2>{props.id}</h2>
            <h2>{props.type}</h2>
            <button type="">Click To Open</button>
        </div>
    )
}

export default PokemonContainer
