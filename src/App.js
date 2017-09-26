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

  handleChangeGameSpeed = (value) => {
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
    this.setState({
      gameStatus: value,
    });
    if (value === 'clear') {
      this.setState({
        generationCounter: 0,
      })
    }
  };

  componentDidMount() {
    clearInterval(this.counterID);
    console.log('componentDidMount(), speed', this.state.gameSpeed)
    this.counterID = setInterval(
      () => this.tick(),
      this.state.gameSpeed
    );
  }

  componentDidUpdate() {
    // TODO clean this code up after finishing boardSize functionality
    const value = this.state.gameStatus

    if (value === 'run') {
      clearInterval(this.counterID);
      this.counterID = setInterval(
        () => this.tick(),
        this.state.gameSpeed
      );
      console.log('default run', this.counterID)
    } else if (value === 'pause') {
      console.log('pause', this.counterID)
      clearInterval(this.counterID);

    } else if (value === 'clear') {
      console.log('clear', this.counterID)
      clearInterval(this.counterID);
    }

  }

  componentWillUnmount() {
    clearInterval(this.counterID);
    console.log('componentWillUnmount()')
  }

  // That function will receive the previous state as the first argument
  tick() {
    this.setState((prevState) => ({
      generationCounter: prevState.generationCounter + 1
    }));
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
