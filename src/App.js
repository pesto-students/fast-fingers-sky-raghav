import React, { Component } from 'react';
import GameConfig from './components/set-game-config/setGameConfig';
import Gameplay from './components/gameplay/gameplay';
import InfoArea from  './components/infoArea/infoArea';
import Homebutton from './components/homeButton/homeButton';
import Gameover from  './components/gameOver/gameOver';
import './App.scss';

const initialState = {
  playerConfig :{
    playerName : '',
    difficultyLevel: 1,
  },
  gameState : {
    config : true,
    gameplay : false,
    gameOver : false,
  },
  scoreboard: [],
};

class App extends Component {
  state = {...initialState};

  setNameHandler = (event) => {
    this.setState({playerConfig:{
      playerName : event.target.value,
      difficultyLevel: this.state.playerConfig.difficultyLevel,
    }});
  }

  setDifficultyHandler = (event) => {
    this.setState({playerConfig:{
      playerName : this.state.playerConfig.playerName,
      difficultyLevel: event.target.value,
    }});
  }

  initiateGameplay = () =>{
    this.setState(({gameState :{
      gameplay : true,
      config : false,
      gameOver : false,
    }
    }))
  }

  initiateGameOver = () =>{
    this.setState(({gameState :{
      gameplay : false,
      config : false,
      gameOver : true,
    }
    }))
  }

  goBackToHome = () => {
    this.setState({...initialState});
  }

  changeDifficultyLevel = () => {
    this.setState({playerConfig:{
      plyerName : this.state.playerConfig.playerName,
      difficultyLevel: this.state.playerConfig.difficultyLevel + 0.5,
    }})
  }

  getTotalTimeTaken = (...newScore) =>{
    if(!this.state.gameState.config)
      this.setState(({scoreboard: [...this.state.scoreboard, ...newScore]}));
  }


  render() {
    return (
      <div className="container-fluid App">
        <div className="row home">
          <div className="col-sm">
          {!this.state.gameState.config && <InfoArea
            playerConfig={this.state.playerConfig}
            scoreboardData={this.state.scoreboard}
            gameState={this.state.gameState}
            initiateGameOver={this.initiateGameOver.bind(this)}
          />}
          </div>
          <div className="col-sm">
            {this.state.gameState.config && <GameConfig
              setNameHandler={this.setNameHandler.bind(this)}
              setDifficultyHandler={this.setDifficultyHandler.bind(this)}
              initiateGameplay={this.initiateGameplay.bind(this)}
            />}
            {this.state.gameState.gameplay && <Gameplay
              difficultyLevel={this.state.playerConfig.difficultyLevel}
              gameState={this.state.gameState}
              changeDifficultyLevel={this.changeDifficultyLevel.bind(this)}
              initiateGameOver={this.initiateGameOver.bind(this)}
              getTotalTimeTaken={this.getTotalTimeTaken.bind(this)}
            />}
            {this.state.gameState.gameOver && <Gameover
              initiateGameplay={this.initiateGameplay.bind(this)}
              scoreboard={this.state.scoreboard}
            />}
          </div>
          <div className="col-sm">
            {!this.state.gameState.config && <Homebutton
              initiateGameOver={this.initiateGameOver.bind(this)}
              goBackToHome={this.goBackToHome.bind(this)}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
