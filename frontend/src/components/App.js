import React, { Component } from 'react';
import logo from '../logo.svg';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import Header from './header.js';
import InfoBlock from './infoblock.js';
import { gameInfos } from '../constants';
import '../App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    selectedGame: gameInfos[0],
  }
  this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index) {
    this.setState({
      selectedGame: gameInfos[index],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>

        <div className='app-infoblock'>
          <InfoBlock game={this.state.selectedGame}/> 
        </div>

        <div className='app-startoptions'>
          <DropdownButton title={this.state.selectedGame.Name} 
            defaultValue={0}
            onSelect={(eventKey) => this.handleSelect(eventKey)}
          >
            {gameInfos.map((game, index) => {
              return <MenuItem eventKey={index}>{game.Name}</MenuItem>
            })}
          </DropdownButton>
          <Button bsStyle='success'>Start Game</Button>
        </div>
      </div>
    );
  }
}

export default App;
