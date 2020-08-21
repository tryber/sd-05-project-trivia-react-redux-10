import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/settings">Settings</Link>
      <br />
      <Link to="/ranking">Ranking</Link>
      <br />
      <Link to="/game">Game</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
