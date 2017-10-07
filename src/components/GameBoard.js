import React, { Component } from 'react'
import './GameBoard.css'
//components
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';

class GameBoard extends Component {
    
    handleChangeCellStatus = (i, j, cel) => {
        this.props.onChangeCellStatus(i, j, cel);
    }

    render() {
        const cells = this.props.cells.map((row, i) => {
            return row.map((cel, j) => {
                return (
                    <div
                        className={cel}
                        onClick={() => this.handleChangeCellStatus(i, j, cel)}
                    ></div>
                )
            })
        });

        return (
            <section>
                <Paper
                    style={{ height: this.props.row * 11 + 1, width: this.props.col * 11 + 1 }}
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
    cells: PropTypes.array,
    row: PropTypes.number,
    col: PropTypes.number,
    onChangeCellStatus: PropTypes.func,
};

export default GameBoard