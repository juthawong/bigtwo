import React, {Component} from 'react';
import { Well } from 'react-bootstrap';

class InfoBlock extends React.Component {

  render() {
    return (
      <div className='infoblock'>
        <Well>
          <ul>
            <li><strong>Name: </strong>{this.props.game.Name}</li>
            <li><strong>Description: </strong>{this.props.game.Description}</li>
            <li><strong>Players: </strong>{this.props.game.Players}</li>
            <li><strong>Cards: </strong>{this.props.game.Cards}</li>
          </ul>
          <strong>Combos: </strong><em>strongest to weakest</em>
          {this.props.game.Combos.map((combo) => { return <p>{combo}</p> })}
        </Well>
      </div>
    );
  }
}

export default InfoBlock;
