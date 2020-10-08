import React, {Component} from 'react';
import './infoArea.scss';

class UserInfo extends Component {
  constructor(props){
    super(props);
    this.levelObj = {'1' : 'EASY', '1.5' : 'MEDIUM', '2' : 'HARD'};
    this.state = {
      playerName : this.props.playerInfo.playerName,
      level: this.levelObj[this.props.playerInfo.difficultyLevel] || 'HARD',
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.playerInfo.difficultyLevel !== prevProps.playerInfo.difficultyLevel ) {
      this.setState({level: this.levelObj[this.props.playerInfo.difficultyLevel]});
    }
  }

  render(){
    return(
      <div className="container-fluid playerInfo">
        <div className="row nameRow">
          <i className="fa fa-user" aria-hidden="true"></i>
          <label className="infoText" style={{marginLeft: '7%'}}>
            {this.state.playerName}
          </label>
        </div>
        <div className="row levelRow">
          <i className="fas fa-gamepad"></i>
          <label className="infoText">
            LEVEL : {this.state.level}
          </label>
        </div>
      </div>
    )
  }
}

export default UserInfo;
