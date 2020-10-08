import React, {Component} from 'react';
import './infoArea.scss';

class Stopgame extends Component {
  render(){
    return (
      <div className="container-fluid stop-game">
        <div className="row stop-game-button" onClick={this.props.stopGameHandler}>
          <i className="fas fa-times"></i>
          <label>
            STOP GAME
          </label>
        </div>
      </div>
    );
  }
}

export default Stopgame;
