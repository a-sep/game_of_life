import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header'
import ControlBar from './components/ControlBar'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      gameSpeed: 500,
      boardSize: 'small',
      gameStatus: 'run',
      generationCounter: 0,
      cells: [],
      row: 10,
      col: 20,
    };
  }

  handleChangeGameSpeed = (value) => {
    clearInterval(this.counterID)
    this.counterID = setInterval(this.tick, value);
    this.setState({
      gameSpeed: value,
    });
  };

  handleChangeBoardSize = (boardSize) => {
    let row
    let col
    if (boardSize === 'small') {
      row = 25
      col = 40
    } else if (boardSize === 'medium') {
      row = 40
      col = 60
    } else if (boardSize === 'big') {
      row = 60
      col = 80
    }
    // fill up cells with css classes
    let cells = []
    for (let r = 0; r < row; r++) {
      cells.push([]);
      for (var c = 0; c < col; c++) {
        // get randomn number from 0-10 and if it's lower then 3 push css class in that cell
        let randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber < 3) {
          let entity
          randomNumber === 0 ? entity = 'cell emptyCell' : randomNumber === 1 ? entity = 'cell youngCell' : entity = 'cell oldCell'
          cells[r].push(entity)
        } else {
          cells[r].push('cell emptyCell')
        }
      }
    }
    this.setState({ boardSize, row, col, cells });
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
      let cells = this.state.cells.map((r) => { return r.map((c) => c = 'cell emptyCell') })
      this.setState({
        generationCounter: 0,
        gameStatus: value,
        cells: cells,
      })
    }
  };

  handleChangeCellStatus = (i, j, value) => {
    // cellStatus: 'emptyCell' - 'youngCell' - 'oldCell'
    const newCells = Array.from(this.state.cells)

    if (value === 'cell emptyCell') {
      newCells[i][j] = 'cell youngCell'
    } else if (value === 'cell youngCell') {
      newCells[i][j] = 'cell oldCell'
    } else if (value === 'cell oldCell') {
      newCells[i][j] = 'cell emptyCell'
    }
    this.setState({ cells: newCells })
  }

  tick = () => {
    let row = this.state.row
    let col = this.state.col
    let cellsUpdate = []

    for (let i = 0; i < row; i++) {
      cellsUpdate.push([]);
      for (let j = 0; j < col; j++) {
        cellsUpdate[i].push('cell emptyCell');
        let neighbors = 0
        if (i > 0 && j > 0) if (this.state.cells[i - 1][j - 1] !== 'cell emptyCell') neighbors++
        if (i > 0) if (this.state.cells[i - 1][j] !== 'cell emptyCell') neighbors++
        if (i > 0 && j < col - 1) if (this.state.cells[i - 1][j + 1] !== 'cell emptyCell') neighbors++
        if (j > 0) if (this.state.cells[i][j - 1] !== 'cell emptyCell') neighbors++
        if (j < col - 1) if (this.state.cells[i][j + 1] !== 'cell emptyCell') neighbors++
        if (i < row - 1 && j > 0) if (this.state.cells[i + 1][j - 1] !== 'cell emptyCell') neighbors++
        if (i < row - 1) if (this.state.cells[i + 1][j] !== 'cell emptyCell') neighbors++
        if (i < row - 1 && j < col - 1) if (this.state.cells[i + 1][j + 1] !== 'cell emptyCell') neighbors++
        // after checkin neighbors set css classes to cell
        if (this.state.cells[i][j] === 'cell emptyCell' && neighbors === 3) {
          cellsUpdate[i][j] = 'cell youngCell'
        } else if (this.state.cells[i][j] !== 'cell emptyCell' && (neighbors < 2 || neighbors > 3)) {
          cellsUpdate[i][j] = 'cell emptyCell'
        } else if (this.state.cells[i][j] === 'cell youngCell' && (neighbors === 2 || neighbors === 3)) {
          cellsUpdate[i][j] = 'cell oldCell'
        } else if (this.state.cells[i][j] === 'cell oldCell' && (neighbors === 2 || neighbors === 3)) {
          cellsUpdate[i][j] = 'cell oldCell'
        }
      }
    }
    this.setState({
      generationCounter: this.state.generationCounter + 1,
      cells: cellsUpdate,
    })
  }


  componentDidMount() {
    this.handleChangeBoardSize(this.state.boardSize)
    this.counterID = setInterval(this.tick, this.state.gameSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.counterID);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
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
            cells={this.state.cells}
            row={this.state.row}
            col={this.state.col}
            onChangeCellStatus={this.handleChangeCellStatus}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
