import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header'
import ControlBar from './components/ControlBar'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>

          <Header />
          <ControlBar />
          <GameBoard />
          <Footer />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
