import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <HomePage />
      <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;