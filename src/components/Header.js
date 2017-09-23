import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    constructor(props) {
        super(props);
        this.handleChangeGameSpeed = this.handleChangeGameSpeed.bind(this);
        this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
    }

    handleChangeGameSpeed(value) {
        this.props.onChangeGameSpeed(value);
    }

    handleChangeBoardSize(value) {
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
                    iconElementRight={<span style={styles.white}> Generation: 0</span>}
                />
            </header>
        )
    }
}

Header.propTypes = {
    gameSpeed: PropTypes.string,
    boardSize: PropTypes.string,
    onChangeGameSpeed: PropTypes.func,
    onChangeBoardSize: PropTypes.func,
};

export default Header