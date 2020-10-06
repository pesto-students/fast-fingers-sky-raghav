import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.radius = 60;
    this.circumference = 120 * Math.PI;
    this.milliseconds = this.props.seconds * 1000;
    this.state = {
      countdown: this.milliseconds,
      isPlaying: false,
      totalTime : this.props.timerValue,
    };
    this.strokeDashoffset = () => this.circumference - (this.state.countdown / this.milliseconds) * this.circumference;
  }

  startTimer = () => {
    this.setState({ isPlaying: true });
    const interval = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 10});
      if (this.state.countdown === 0) {
        clearInterval(interval);
        this.setState({
          countdown: this.milliseconds,
          isPlaying: false,
        });
      }
    }, 10);
  };

  startGameTimer = () => {
    setInterval(() => {
      this.setState({totalTime: this.state.totalTime + 1000});
    }, 1000);
  }

  componentDidMount(){
    this.startTimer();
    this.startGameTimer();
  }

  render() {
    const countdownSizeStyles = {
      height: 120,
      width: 120,
    };

    const textStyles = {
      color: 'white',
      fontSize: 120 * 0.3,
    };

    const seconds = (this.state.totalTime/1000).toFixed();

    return (
      <div>
        <div
          style={{
            pointerEvents: this.state.isPlaying ? "none" : "all",
            opacity: this.state.isPlaying ? 0.4 : 1,
          }}
        >
        </div>
        <div
          style={Object.assign(
            {},
            styles.countdownContainer,
            countdownSizeStyles
          )} onClick={!this.state.isPlaying ? this.startTimer : () => {}}
        >
          <p style={textStyles}>{seconds}</p>
          <svg style={styles.svg}>
            <circle
              cx={this.radius}
              cy={this.radius}
              r={this.radius}
              fill="none"
              stroke='black'
              strokeWidth='8'
            ></circle>
          </svg>
          <svg style={styles.svg}>
            <circle
              strokeDasharray={this.circumference}
              strokeDashoffset={
                this.state.isPlaying ? this.strokeDashoffset() : 0
              }
              r={this.radius}
              cx={this.radius}
              cy={this.radius}
              fill="none"
              strokeLinecap="round"
              stroke='#ff5155'
              strokeWidth='8'
            ></circle>
          </svg>
        </div>
      </div>
    );
  }
}

const styles = {
  countdownContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: "rotateY(-180deg) rotateZ(-90deg)",
    overflow: "visible",
  }
};

export default Timer;
