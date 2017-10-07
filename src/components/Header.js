import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import AppBar from 'material-ui/AppBar';
import Settings from './Settings'
import EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';

const styles = {
    white: {
        color: 'white',
    },
    center: {
        textAlign: 'center',
    },
}

class Header extends Component {

    handleChangeGameSpeed = (value) => {
        this.props.onChangeGameSpeed(value);
    }

    handleChangeBoardSize = (value) => {
        this.props.onChangeBoardSize(value);
    }

    render() {
        return (
            <header style={styles.center} >
                <AppBar
                    iconElementLeft={
                        <Settings
                            gameSpeed={this.props.gameSpeed}
                            boardSize={this.props.boardSize}
                            onChangeGameSpeed={this.handleChangeGameSpeed}
                            onChangeBoardSize={this.handleChangeBoardSize}
                        />
                    }
                    title={<span ><EditorBubbleChart style={styles.white} /> Game of Life <EditorBubbleChart style={styles.white} /></span>}
                    iconElementRight={<span style={styles.white}>{this.props.generationCounter} generation</span>}
                />
            </header>
        )
    }
}

Header.propTypes = {
    gameSpeed: PropTypes.number,
    boardSize: PropTypes.string,
    onChangeGameSpeed: PropTypes.func,
    onChangeBoardSize: PropTypes.func,
    generationCounter: PropTypes.number,
};

export default Header