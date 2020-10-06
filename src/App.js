import React, { Component } from 'react';
import GameConfig from './components/set-game-config/setGameConfig';
import Gameplay from './components/gameplay/gameplay';
import './App.scss';


class App extends Component {
  state = {
    playerConfig :{
      playerName : '',
      difficultyLevel: '',
    },
    gameState : {
      config : true,
      gameplay : false,
      gameOver : false,
    },
    scoreboard: [],
  }

  setNameHandler = (event) => {
    this.setState({playerConfig:{
      plyerName : event.target.value,
      difficultyLevel: this.state.playerConfig.difficultyLevel,
    }});
  }

  setDifficultyHandler = (event) => {
    this.setState({playerConfig:{
      plyerName : this.state.playerConfig.playerName,
      difficultyLevel: event.target.value,
    }});
    console.log('setDifficultyHandler', event.target.value);
  }

  initiateGameplay = () =>{
    this.setState(({gameState :{
      gameplay : true,
      config : false,
    }
    }))
  }

  pushScoretoScoreboard = (...newScore) =>{
    this.setState(({scoreboard: [...this.state.scoreboard, ...newScore]}));
  }


  render() {
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-sm">
          </div>
          <div className="col-sm">
            {this.state.gameState.config && <GameConfig
              setNameHandler={this.setNameHandler.bind(this)}
              setDifficultyHandler={this.setDifficultyHandler.bind(this)}
              initiateGameplay={this.initiateGameplay.bind(this)}
            />}
            {this.state.gameState.gameplay && <Gameplay
              difficultyLevel={this.state.playerConfig.difficultyLevel}
              pushScoretoScoreboard={this.pushScoretoScoreboard.bind(this)}
            />}
          </div>
          <div className="col-sm">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
