import React, { Component } from 'react';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import ImageCrop75 from 'material-ui/svg-icons/image/crop-7-5';
import ImageCrop54 from 'material-ui/svg-icons/image/crop-5-4';
import ImageCrop32 from 'material-ui/svg-icons/image/crop-3-2';


class Settings extends Component {
    state = {
        firstSlider: 0,
        secondSlider: 0,
        gameSpeed: 'slow',
        boardSize: 'small'
    };

    handleChangeGameSpeed = (event, value) => {
        this.setState({
            gameSpeed: value,
        });
    };

    handleChangeBoardSize = (event, value) => {
        this.setState({
            boardSize: value,
        });
    };

    render() {
        return (
            <IconMenu
            iconStyle={{ color: 'white' }}
                iconButtonElement={<IconButton tooltip="Settings"><MoreVertIcon /></IconButton>}
            >
                <MenuItem
                    primaryText="Game speed"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                        <Menu
                            onChange={this.handleChangeGameSpeed}
                            value={this.state.gameSpeed}
                        >
                            <MenuItem value="slow" leftIcon={<MapsDirectionsWalk />} primaryText="slow" />
                            <MenuItem value="medium" leftIcon={<MapsDirectionsRun />} primaryText="medium" />
                            <MenuItem value="fast" leftIcon={<MapsDirectionsBike />} primaryText="fast" />
                        </Menu>
                    ]}
                />
                <MenuItem
                    primaryText="Board size"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                        <Menu
                            onChange={this.handleChangeBoardSize}
                            value={this.state.boardSize}
                        >
                            <MenuItem value="small" leftIcon={<ImageCrop75 />} primaryText="small" />
                            <MenuItem value="medium" leftIcon={<ImageCrop54 />} primaryText="medium" />
                            <MenuItem value="big" leftIcon={<ImageCrop32 />} primaryText="big" />
                        </Menu>
                    ]}
                />
                <Divider />
                <MenuItem value="1" primaryText="Reload" />

            </IconMenu>
        )
    }
}

export default Settings