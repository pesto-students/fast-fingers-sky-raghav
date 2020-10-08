import React, {Component} from 'react';
import './infoArea.scss';

class Scoreboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      scores : this.props.scoreData,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.scoreData.length !== prevProps.scoreData.length ) {
      this.setState({scores: this.props.scoreData});
    }
  }

  render(){
    const scoreStyles = {
      color: 'white',
    }
    let scores = this.state.scores.map((score, idx) => <label key={idx.toString()} style={scoreStyles}> Game {idx + 1} :-  {score}</label>);

    return(
      <div className="container-fluid scoreboard">
        SCORE BOARD
        <div className="scores">
          {scores}
        </div>
      </div>
    )
  }
}

export default Scoreboard;
