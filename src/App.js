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
      gameSpeed: 'slow',
      boardSize: 'small',
      gameStatus: 'run',
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
  };


  render() {
    return (
      <MuiThemeProvider>
        <div>

          <Header
            gameSpeed={this.state.gameSpeed}
            boardSize={this.state.boardSize}
            onChangeGameSpeed={this.handleChangeGameSpeed}
            onChangeBoardSize={this.handleChangeBoardSize}
          />
          <ControlBar
            gameStatus={this.state.gameStatus}
            onChangeGameStatus={this.handleChangeGameStatus}
          />
          <GameBoard
            gameSpeed={this.state.gameSpeed}
            boardSize={this.state.boardSize}
          />
          <Footer />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
