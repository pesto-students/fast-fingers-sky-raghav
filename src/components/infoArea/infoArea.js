import React, {Component} from 'react';
import Scoreboard from './scoreboard';
import UserInfo from './userInfo';
import Stopgame from './stopGame';
import './infoArea.scss';

class InfoArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      scoreData : this.props.scoreboardData,
      playerInfo: this.props.playerConfig,
      gameplay:  this.props.gameState.gameplay,
      gameOver: this.props.gameState.gameOver
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.scoreboardData.length !== prevProps.scoreboardData.length ) {
      this.setState({scoreData: this.props.scoreboardData});
    }
    if (this.props.playerConfig.difficultyLevel !== prevProps.playerConfig.difficultyLevel ) {
      this.setState({playerInfo: this.props.playerConfig.difficultyLevel});
    }
    let gameplay = this.props.gameState.gameplay;
    if (gameplay !== prevProps.gameState.gameplay) {
      this.setState({gameplay: this.props.gameState.gameplay, gameOver: this.props.gameState.gameOver});
    }
  }

  render(){
    return(
      <div className="container-fluid infoArea" >
        <div className="row userInfo">
          <div className="col-sm">
            <UserInfo
              playerInfo={this.state.playerInfo}
            />
          </div>
        </div>
        <div className="row scoreInfo">
          <div className="col-sm">
            {this.state.gameplay && <Scoreboard
              scoreData={this.state.scoreData}
            />}
          </div>
        </div>
        <div className="row stopButton">
          <div className="col-sm">
            {this.state.gameplay && <Stopgame
              stopGameHandler={this.props.initiateGameOver}
            />}
          </div>
        </div>
      </div>
    )
  }
}

export default InfoArea;
