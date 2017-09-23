import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    constructor(props) {
        super(props);
        this.handleChangeGameSpeed = this.handleChangeGameSpeed.bind(this);
        this.handleChangeBoardSize = this.handleChangeBoardSize.bind(this);
        this.reload = this.reload.bind(this);
    }

    handleChangeGameSpeed(event, value) {
        this.props.onChangeGameSpeed(value);
    }

    handleChangeBoardSize(event, value) {
        this.props.onChangeBoardSize(value);
    }

    reload() {
        window.location.reload(false);
        // If we needed to pull the document from
        //  the web-server again (such as where the document contents
        //  change dynamically) we would pass the argument as 'true'.
    }

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
                            value={this.props.gameSpeed}
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
                            value={this.props.boardSize}
                        >
                            <MenuItem value="small" leftIcon={<ImageCrop75 />} primaryText="small" />
                            <MenuItem value="medium" leftIcon={<ImageCrop54 />} primaryText="medium" />
                            <MenuItem value="big" leftIcon={<ImageCrop32 />} primaryText="big" />
                        </Menu>
                    ]}
                />
                <Divider />
                <MenuItem value="1" primaryText="Reload" onClick={this.reload} />
            </IconMenu>
        )
    }
}

export default Settings