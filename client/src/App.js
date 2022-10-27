import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import Detail from './components/Detail';
import PokemonCreate from "./components/PokemonCreate"
import EditarPoke from './components/Edit';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={LandingPage}/> 
        <Route path ="/pokemon/:id" component ={Detail}/>
        <Route path = "/createpokemons" component={PokemonCreate}/>
        <Route path='/pokemons' component={Home}/>
        <Route path="/pokemonsEdit/:id" component={EditarPoke}/>
        </Switch>
    </div>
  );
}

export default App;