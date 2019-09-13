import React, { Component } from 'react'
import Pokemon from './Pokemon';
import axios from 'axios';


export default class PokemonList extends Component {

    state= {
        url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000',
        pokemonList: null,
        search: ''
    }

    async componentDidMount()
    {
        const result = await axios.get(this.state.url);
        this.setState({pokemonList: result.data['results']});
    }

    onChange = e => {
        this.setState({search : e.target.value});
    }

    renderPokemonList = list => {
        
        if(this.state.search.length < 2)
        {
            return <div className="card-body">
                    {this.state.pokemonList ? 
                        (<div className="row">
                            {this.state.pokemonList.map(pokemon => (
                            <Pokemon
                                key = {pokemon.name}
                                name = {pokemon.name}
                                url = {pokemon.url}
                            />))}
                        </div>)
                    : (<h1>Loading !</h1>)}
                </div>
        }
        else {
            const pokeToDisplay = this.state.pokemonList.filter(poke => poke.name.includes(this.state.search));

            return <div className="card-body">
                        {this.state.pokemonList ? 
                        (<div className="row">
                            {pokeToDisplay.map(pokemon => (
                                <Pokemon
                                    key = {pokemon.name}
                                    name = {pokemon.name}
                                    url = {pokemon.url}
                                />))}
                        </div>)
                        : (<h1>Loading !</h1>)}
                    </div>
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-5">
                                <input placeholder="Search a Pokemon" onChange={this.onChange}></input>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderPokemonList()}
            </React.Fragment>
        );
    }
}
