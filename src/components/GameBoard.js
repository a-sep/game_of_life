import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types';


const styles = {
    center: {
        textAlign: 'center',
    },
    paper: {
        height: 300,
        width: 500,
        display: 'inline-block',
    },
};

class GameBoard extends Component {
    render() {
        return (
            <section style={styles.center} >
                <Paper style={styles.paper} zDepth={2}>
                    <div>Speed: {this.props.gameSpeed}</div>
                    <br />
                    <div>Size: {this.props.boardSize}</div>
                    <br/>
                    <div>Status: {this.props.gameStatus}</div>
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