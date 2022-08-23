import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import PokemonCreate from "./components/PokemonCreate"

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={LandingPage}/> 
        <Route path ="/pokemons/:id" component ={Detail}/>
        <Route path = "/createpokemons" component={PokemonCreate}/>
        <Route path='/pokemons' component={Home}/>
        </Switch>
    </div>
  );
}

export default App;