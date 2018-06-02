import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './header.js';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>

        <div className='app-info-block'>
          
        </div>
      </div>
    );
  }
}

export default App;
