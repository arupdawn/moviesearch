import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import MoviePage from './Components/MoviePage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename="/moviesearch2/">
          <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/movieinfo" exact component={MoviePage}/>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
