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

    handleChangeCellStatus(i, j, value) {
        // cellStatus: 0-empty, 1-young, 2-old
        const cells = this.state.cells
        if (value === 0) {
            cells[i][j] = 1
        } else if (value === 1) {
            cells[i][j] = 2
        } else if (value === 2) {
            cells[i][j] = 0
        }
        this.setState({ cells })
    }

    calculateBoardSize(random) {
        const size = this.props.boardSize
        let row
        let col
        if (size === 'small') {
            row = 15
            col = 30
        } else if (size === 'medium') {
            row = 30
            col = 50
        } else if (size === 'big') {
            row = 45
            col = 70
        }
        let cells = []
        for (let r = 0; r < row; r++) {
            cells.push([]);
            for (var c = 0; c < col; c++) {
                cells[r].push(random ? Math.floor(Math.random() * 3) : 0)
            }
        }
        return { row, col, cells }
    }

    componentWillMount() {
        let board = this.calculateBoardSize(true)
        this.setState({
            cells: board.cells
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // update if boardSize has changed
        if (prevProps.boardSize !== this.props.boardSize || prevProps.gameStatus !== this.props.gameStatus && this.props.gameStatus === 'clear') {
            let board
            if (this.props.gameStatus !== 'clear') {
                board = this.calculateBoardSize(true)
            } else {
                board = this.calculateBoardSize()
            }
            this.setState({
                cells: board.cells
            })
        }

    }

    render() {

        const cells = this.state.cells.map((row, i) => {
            return row.map((col, j) => {
                return (
                    <div
                        className={col === 0 ? 'cell emptyCell' : col === 1 ? 'cell youngCell' : 'cell oldCell'}
                        onClick={this.handleChangeCellStatus.bind(this, i, j, col)}
                    ></div>
                )
            })
        });


        return (
            <section>
                <Paper
                    style={{ height: cells.length * 11 + 1, width: cells[0].length * 11 + 1 }}
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