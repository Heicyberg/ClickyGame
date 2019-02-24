import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav'
import Game from './components/Game'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
    <div>
        <Nav/>
        <Jumbotron/>
        <Game/>
    </div>
    );
  }
}

export default App;
