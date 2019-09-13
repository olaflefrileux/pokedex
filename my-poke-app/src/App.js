import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/pokemondetails/:index" component={PokemonDetails}/>
            </Switch>
            
          </div>
        </div>
    </Router>
  );
}

export default App;
