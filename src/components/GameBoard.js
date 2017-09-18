import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const styles = {
    center: {
        textAlign: 'center',
    },
    paper: {
        height: 300,
        width: 500,
        padding: 60,
        display: 'inline-block',
    },
};


class GameBoard extends Component {
    render() {
        return (
            <section style={styles.center} >
                <Paper style={styles.paper} zDepth={2}>
                </Paper>
            </section>
        )
    }
}

export default GameBoard