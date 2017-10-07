import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Paper from 'material-ui/Paper'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
// icons
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvStop from 'material-ui/svg-icons/av/stop';

const styles = {
    root: {
        marginTop: 10,
        marginBottom: 10,
    },
};

class ControlBar extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => {
        this.setState({ selectedIndex: index });
        this.handleChangeGameStatus(index)
    }

    handleChangeGameStatus = (index) => {
        if (index === 0) {
            this.props.onChangeGameStatus('run');
        } else if (index === 1) {
            this.props.onChangeGameStatus('pause');
        } else if (index === 2) {
            this.props.onChangeGameStatus('clear');
        }
    }

    render() {
        return (
            <section >
                <Paper style={styles.root} zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.selectedIndex} >
                        <BottomNavigationItem
                            label="Run"
                            icon={<AvPlayArrow />}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Pause"
                            icon={<AvPause />}
                            onClick={() => this.select(1)}
                        />
                        <BottomNavigationItem
                            label="Clear"
                            icon={<AvStop />}
                            onClick={() => this.select(2)}
                        />
                    </BottomNavigation>
                </Paper>
            </section>
        )
    }
}

ControlBar.propTypes = {
    gameStatus: PropTypes.string,
    onChangeGameStatus: PropTypes.func
}

export default ControlBar