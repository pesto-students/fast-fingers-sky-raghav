import React, {Component} from 'react';
import './homeButton.scss';

class Homebutton extends Component {
  render(){
    return(
      <div className="container-fluid" >
        <div className="row game-title">
          <div className="col-sm">
            <label> fast fingers </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          </div>
        </div>
        <div className="row home-button" onClick={this.props.goBackToHome} >
          <div className="col-sm">
            <i className="fas fa-home"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Homebutton;
