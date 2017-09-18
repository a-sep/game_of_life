import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvStop from 'material-ui/svg-icons/av/stop';


const styles = {
    root: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
};

class ControlBar extends Component {

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({ selectedIndex: index });

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

export default ControlBar