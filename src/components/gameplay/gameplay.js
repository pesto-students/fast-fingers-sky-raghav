import React, {Component} from 'react';
import Timer from './timer.js';
//import Data from '../../../data/dictionary.json';
import Data from './dictionary.json';
import './gameplay.scss';

class Gameplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      word: Data[Math.floor(Math.random() * Data.length)],
      typedWord: '',
      matchReport: []
    };
  };

  getNewWordFromData = () => {
    this.setState({word: Data[Math.floor(Math.random() * Data.length)]});
    console.log('getNewWordFromData', this.state.word);
  };

  checkWordHandler = (event) => {
    let newTypedWord = event.target.value;
    this.setState({typedWord: newTypedWord, matchReport: newTypedWord
      .split('')
      .map((char, idx) => {
        if(char === this.state.word.charAt(idx)){
          return true;
        }
        return false;
      })
    })
    //console.log('matchReportUpdated', this.state.matchReport, this.state.matchReport.length, this.state.word, newTypedWord, this.state.word.length);
    setTimeout(() => {
      if(this.state.matchReport.length === this.state.word.length && this.state.matchReport.indexOf(false) < 0){
        this.getNewWordFromData();
        this.setState({typedWord: '', matchReport:[]});
      }}, 0);
  };

  colorPicker = (idx) => {
    if(this.state.matchReport[idx]) return 'Green';
    else if(this.state.matchReport[idx] === undefined) return 'white';
    return 'blue';
  };

  render(){
    let word = this.state.word
    .split('')
    .map((char, idx) => <label key={idx.toString()} style={{color: this.colorPicker(idx)}}>{char}</label>);

    return (
      <div className="container">
        <div className="row timer">
          <div className="col-sm">
            <Timer
              seconds={60}
              timerValue={this.state.timerValue}
            />
          </div>
        </div>
        <div className="row inputWordRow">
          <div className="col-sm">
            {word}
            <input type="text" value={this.state.typedWord} onChange={this.checkWordHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Gameplay;
