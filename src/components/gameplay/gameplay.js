import React, {Component} from 'react';
import Timer from './timer.js';
import Data from './dictionary.json';
import './gameplay.scss';

class Gameplay extends Component {
  constructor(props) {
    super(props);
    this.word = Data[Math.floor(Math.random() * Data.length)].toUpperCase();
    this.difficultyFactor = this.props.difficultyLevel;
    this.state = {
      timerValue: 0,
      countdown: (this.word.length / this.difficultyFactor).toFixed(),
      word: this.word,
      typedWord: '',
      matchReport: [],
    };
  };

  getNewWordFromData = () => {
    this.setState({word: Data[Math.floor(Math.random() * Data.length)].toUpperCase()});
  };

  checkWordHandler = (event) => {
    let newTypedWord = event.target.value.toUpperCase();
    this.setState({typedWord: newTypedWord, matchReport: newTypedWord
      .split('')
      .map((char, idx) => {
        if(char === this.state.word.charAt(idx)){
          return true;
        }
        return false;
      })
    })
    setTimeout(() => {
      if(this.state.matchReport.length === this.state.word.length && this.state.matchReport.indexOf(false) < 0){
        this.getNewWordFromData();
        if(this.difficultyFactor < 2) this.difficultyFactor += 0.01;
        if(this.difficultyFactor - this.props.difficultyLevel >= 0.5 && this.props.difficultyLevel < 2) this.props.changeDifficultyLevel();
        console.log('Factor', this.difficultyFactor, this.props.difficultyLevel);
        this.setState({typedWord: '', matchReport:[], countdown: (this.word.length / this.difficultyFactor)});
      }}, 0);
  };

  colorPicker = (idx) => {
    if(this.state.matchReport[idx]) return '#54ba18';
    else if(this.state.matchReport[idx] === undefined) return 'white';
    return '#445298';
  };
  render(){
    const labelStyles = {
      textShadow: '0 0 16px rgba(0, 0, 0, 0.16)',
      fontFamily: 'Gotham',
      fontSize: '1.5rem',
      fontWeight: '400',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.2',
      letterSpacing: 'normal',
      textAlign: 'left',
    };
    let word = this.state.word
    .split('')
    .map((char, idx) => <label key={idx.toString()} style={{...labelStyles, color: this.colorPicker(idx)}}>{char}</label>);

    return (
      <div className="container">
        <div className="row timer">
          <div className="col-sm">
            <Timer
              seconds={this.state.countdown}
              timerValue={this.state.timerValue}
              initiateGameOver={this.props.initiateGameOver}
              totalTimeTaken={this.props.getTotalTimeTaken}
            />
          </div>
        </div>
        <div className="row inputWordRow">
          <div className="col-sm score">
            {word}
            <input type="text" value={this.state.typedWord} onChange={this.checkWordHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gameplay;
