import React, { Component } from 'react'
import './GameBoard.css'
//components
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';

class GameBoard extends Component {
    constructor() {
        super();
        this.state = {
            cells: [],
        };
    }

    calculateBoardSize(withLivingCells) {
        const size = this.props.boardSize
        let row
        let col
        if (size === 'small') {
            row = 10
            col = 20
        } else if (size === 'medium') {
            row = 20
            col = 35
        } else if (size === 'big') {
            row = 30
            col = 50
        }

        let cells = []
        for (let r = 0; r < row; r++) {
            cells.push([]);
            for (var c = 0; c < col; c++) {
                // todo - change range of numbers
                let entity = 'cell emptyCell'
                if (withLivingCells) {
                    let randomNumber = Math.floor(Math.random() * 15)
                    if (randomNumber < 3) {
                        randomNumber === 1 ? entity = 'cell youngCell' : entity = 'cell oldCell'
                    }
                }
                cells[r].push(entity)
            }
        }
        return { row, col, cells }
    }


    handleChangeCellStatus(i, j, value) {
        // cellStatus: 'emptyCell' - 'youngCell' - 'oldCell'
        const cells = this.state.cells.slice()
        if (value === 'cell emptyCell') {
            cells[i][j] = 'cell youngCell'
        } else if (value === 'cell youngCell') {
            cells[i][j] = 'cell oldCell'
        } else if (value === 'cell oldCell') {
            cells[i][j] = 'cell emptyCell'
        }
        this.setState({ cells })
    }

    componentWillMount() {
        let board = this.calculateBoardSize(true)
        this.setState({
            cells: board.cells
        })
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        // update if boardSize has changed, if gameStatus === clear calculate clear board
        let board
        if (prevProps.boardSize !== this.props.boardSize) {
            if (this.props.gameStatus !== 'clear') {
                board = this.calculateBoardSize(true)
            } else {
                board = this.calculateBoardSize()
            }
            this.setState({
                cells: board.cells
            })
        } else if (prevProps.gameStatus !== 'clear' && this.props.gameStatus === 'clear') { // if user click 'clear' button without changing a size 
            board = this.calculateBoardSize()
            this.setState({
                cells: board.cells
            })
        }

    }

    render() {

        // let start = new Date();

        const cells = this.state.cells.map((row, i) => {
            return row.map((col, j) => {
                return (
                    <div
                        className={col}
                        onClick={this.handleChangeCellStatus.bind(this, i, j, col)}
                    ></div>
                )
            })
        });

        // let stop = new Date();
        // let timeDifference = stop.getTime() - start.getTime();
        // console.log(timeDifference)
        
        return (
            <section>
                <Paper
                    style={{ height: this.state.cells.length * 11 + 1, width: this.state.cells[0].length * 11 + 1 }}
                    className='paper'
                    zDepth={2}
                >
                    {cells}
                </Paper>
            </section>
        )
    }
}

GameBoard.propTypes = {
    gameSpeed: PropTypes.number,
    boardSize: PropTypes.string,
    gameStatus: PropTypes.string,
};

export default GameBoard