import React, {Component} from 'react';
import './gameOver.scss';

class Gameover extends Component {
  constructor(props) {
    super(props);
  };

  render(){
    let lastScore = this.props.scoreboard[this.props.scoreboard.length - 1];
    return (
      <div className="container-fluid gameOver">
        <div className="row game-over-score" style={{height: '50%', position: 'relative'}}>
          <label style={{bottom: 0, position: 'absolute'}}>
            SCORE : GAME {this.props.scoreboard.length}
          </label>
        </div>
        <div className="row game-over-score">
          <label style={{fontSize: '3rem', marginLeft: '20%'}}> {lastScore}</label>
        </div>
        <div className="row play-again-button" onClick={this.props.initiateGameplay}>
          <i className="fas fa-redo"></i>
          <label>
            PLAY AGAIN
          </label>
        </div>
      </div>
    );
  }
}

export default Gameover;
