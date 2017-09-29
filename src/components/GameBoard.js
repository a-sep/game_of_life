import React, { Component } from 'react'
import './GameBoard.css'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';


const styles = {
    paper: {
        height: 300,
        width: 500,
        display: 'inline-block',
    },
};

class GameBoard extends Component {
    render() {
        return (
            <section>
                <Paper style={styles.paper} zDepth={2}>
 
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