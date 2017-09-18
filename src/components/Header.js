import React, { Component } from 'react';
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

    render() {
        return (
            <header style={styles.center} >
                <AppBar
                    title={<span ><EditorBubbleChart style={styles.white} /> Game of Life <EditorBubbleChart style={styles.white} /></span>}
                    iconElementLeft={
                        <Settings />
                    }
                    iconStyle={{ color: 'white' }}
                />
            </header>
        )
    }
}

export default Header