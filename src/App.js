import React, { Component } from 'react'
import './App.css';
import Basketball from './Basketball';
import Cornhole from './Cornhole';
import Football from './Football';
import Golf from './Golf';
import Hockey from './Hockey';

import Racing from './Racing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Racing />
        <Basketball />
        <Football />
        <Hockey />
        <Golf />
        <Cornhole />
        <div>
        </div>
      </div>
    )
  }
}



export default App;
