import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";



class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemonUrl: "",
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    axios.get(apiUrl).then((response) => {
      this.setState({ pokemonList: response.data.results });
    });
  };

  onChangeSelect = (event) => {
    console.log("SELECIONOU ALGO", event.target.value);
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
      console.log("RESPOSTA POKEMON", response.data.sprites.front_default);
      this.setState({
        selectedPokemonUrl: response.data.sprites.front_default
      });
    });
 
  };


  render() {
    console.log(this.state.pokemonList);
    const optionList = this.state.pokemonList.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    return (
      <div className="App">
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
        <img src={this.state.selectedPokemonUrl} />
      </div>
    );
  }
}

export default App;


const PokemonSelect = styled.select`
  width: 100%;
`;