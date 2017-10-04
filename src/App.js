import React, { Component } from 'react';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header'
import ControlBar from './components/ControlBar'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSpeed: 1000,
      boardSize: 'small',
      gameStatus: 'run',
      generationCounter: 0,
    };
  }
  // That function will receive the previous state as the first argument
  tick = () => {
    this.setState({
      generationCounter: this.state.generationCounter + 1
    });
  }

  handleChangeGameSpeed = (value) => {
    clearInterval(this.counterID)
    this.counterID = setInterval(this.tick, value);
    this.setState({
      gameSpeed: value,
    });
  };

  handleChangeBoardSize = (value) => {
    this.setState({
      boardSize: value,
    });
  };

  handleChangeGameStatus = (value) => {
    if (value === 'run') {
      clearInterval(this.counterID);
      this.counterID = setInterval(this.tick, this.state.gameSpeed);
      this.setState({
        gameStatus: value,
      });
    } else if (value === 'pause') {
      clearInterval(this.counterID);
      this.setState({
        gameStatus: value,
      });
    } else if (value === 'clear') {
      clearInterval(this.counterID);
      this.setState({
        generationCounter: 0,
        gameStatus: value,
      })
    }
  };

  componentDidMount() {
    this.counterID = setInterval(
      this.tick,
      this.state.gameSpeed
    );
  }

  componentWillUnmount() {
    clearInterval(this.counterID);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{
          backgroundColor: 'lightGray',
          height: '100vh',
        }}>

          <Header
            gameSpeed={this.state.gameSpeed}
            boardSize={this.state.boardSize}
            onChangeGameSpeed={this.handleChangeGameSpeed}
            onChangeBoardSize={this.handleChangeBoardSize}
            generationCounter={this.state.generationCounter}
          />
          <ControlBar
            gameStatus={this.state.gameStatus}
            onChangeGameStatus={this.handleChangeGameStatus}
          />
          <GameBoard
            gameSpeed={this.state.gameSpeed}
            boardSize={this.state.boardSize}
            gameStatus={this.state.gameStatus}
          />
          <Footer />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
