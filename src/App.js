import React, { Component } from 'react'
import './App.css';

// Components
import Racing from './Racing';
import Basketball from './Basketball';
import Cover from './Cover';
import Login from './Login';
import Documentation from './Documentation';
import Forum from './Forum';
import Hero from './Hero';
import Rocket from './Rocket';
import Dragon from './Dragon';
import Kanban from './Kanban';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Racing />
        <Basketball /> */}
        {/* <Cover /> */}
        {/* <Login /> */}
        {/* <Documentation /> */}
        {/* <Forum /> */}
        {/* <Hero /> */}
        {/* <Rocket /> */}
        {/* <Dragon /> */}
        <Kanban />
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting

// functional component -> made out of a function
// class component -> is made out of a class