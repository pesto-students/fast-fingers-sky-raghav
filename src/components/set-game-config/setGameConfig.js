import React from 'react';
import './setGameConfig.scss';

const GameConfig = (props) => {
    return (
      <div className="container" >
        <div className="row gameIcon">
          <div className="col-sm">
            <i className="fas fa-keyboard"></i>
          </div>
        </div>
        <div className="row gameTitle">
          <div className="col-sm">
            <h1>fast fingers</h1>
            <label>---the ultimate typing game ---</label>
          </div>
        </div>
        <div className="row gameConfig">
          <div className="col-sm">
            <form>
                <label>
                  <input type="text" placeholder="TYPE YOUR NAME" className="nameInput" onChange={props.setNameHandler}/>
                </label>
                <label>
                  <select defaultValue={'DEFAULT'} onChange={props.setDifficultyHandler} required>
                    <option value="DEFAULT" disabled hidden>DIFFICULTY LEVEL</option>
                    <option value="1">Easy</option>
                    <option value="1.5">Medium</option>
                    <option value="2">Hard</option>
                  </select>
                </label>
            </form>
          </div>
        </div>
        <div className="row startGameButton">
          <div className="col-sm" onClick={props.initiateGameplay}>
            <i className="fas fa-play icon"></i>
            <h3 className="text">Start Game</h3>
          </div>
        </div>
      </div>
    );
}

export default GameConfig;
