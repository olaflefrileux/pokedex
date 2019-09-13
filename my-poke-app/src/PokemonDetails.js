import React, { Component } from 'react';
import axios from 'axios';

export default class PokemonDetails extends Component {

    state = {
        name:'',
        index: '',
        imageUrl: '',
        types: [],
        stats: {
            hp: '',
            attack: '',
            defense: '',
            specailAttack: "",
            specialDefense: "",
            speed: '',
        },
        average:[]
    }

    async componentDidMount()
    {   
        const {index} = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;

        const pokeInfos = await axios.get(pokemonUrl);
        const name = pokeInfos.data.name;
        const imageUrl = pokeInfos.data.sprites.front_default;

        let {hp, attack, defense, specailAttack, specialDefense, speed} = '';

        pokeInfos.data.stats.map(stat => {
            switch (stat.stat.name)
            {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'special-attack':
                    specailAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
            }
        });

        const types = pokeInfos.data.types.map(type => type.type.name);

        // const averageUrl = 'https://pokestats-gmtiqydwwa.now.sh/';
        // const request = require("axios")
        // request({
        //     url: averageUrl,
        //     method: 'post',
        //     data: {
        //         query: `
        //         query {
        //             averageStats(type1: FIRE) {
        //             avg {
        //                 hp
        //                 attack
        //                 defense
        //                 specialAttack
        //                 specialDefense
        //                 speed
        //             }
        //             types
        //             }
        //         }
        //         `
        // }});

        this.setState({
            name,
            index,
            imageUrl,
            types,
            stats:{
                hp,
                attack,
                defense,
                specailAttack,
                specialDefense,
                speed
            }
        });
    }

    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-5">
                                <h1>{this.state.name}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={this.state.imageUrl} className="card-img-top rounded mx-auto mt-2"/>
                        </div>
                        <div className="col-md-9">
                            <h2>Types: </h2>
                            <p></p>
                            <p></p>
                            {this.state.types.map(type => (
                                <h5>- {type}</h5>
                            ))}
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <h2>Base Stats: </h2>

                            <p>HP : {this.state.stats.hp}</p>
                            <progress className="progress is-primary" value={this.state.stats.hp}
                                max="100">{this.state.stats.hp}%
                            </progress>
                        
                            <p>Attack : {this.state.stats.attack}</p>
                            <progress className="progress is-primary" value={this.state.stats.attack}
                                max="100">{this.state.stats.attack}%
                            </progress>

                            <p>Defense : {this.state.stats.defense}</p>
                            <progress className="progress is-primary" value={this.state.stats.defense}
                                max="100">{this.state.stats.defense}%
                            </progress>

                            <p>Special Attack : {this.state.stats.specailAttack}</p>
                            <progress className="progress is-primary" value={this.state.stats.specailAttack}
                                max="100">{this.state.stats.specailAttack}%
                            </progress>

                            <p>Special Defense : {this.state.stats.specialDefense}</p>
                            <progress className="progress is-primary" value={this.state.stats.specialDefense}
                                max="100">{this.state.stats.specialDefense}%
                            </progress>

                            <p>Speed : {this.state.stats.speed}</p>
                            <progress className="progress is-primary" value={this.state.stats.speed}
                                max="100">{this.state.stats.speed}%
                            </progress>

                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
