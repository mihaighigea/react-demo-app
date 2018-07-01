import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import users from '../../resources/users';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class UserMenu extends React.Component {
    button = null;

    state = {
        selectedIndex: 0,
        anchorEl: null
    };

    handleClickListItem = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClick = (event, index) => {
        this.setState({ selectedIndex: index, anchorEl: null });
        this.props.updateSelectedUser(users[index]);
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {

        const containerStyles = {
            marginLeft: "auto",
            height: "85px",
            width: "140px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            order: 2
        };
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return (
            <div style={ containerStyles } className={classes.root}>
                <List component="nav">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="When device is locked"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText
                            primary="Switch user"
                            secondary={users[this.state.selectedIndex].name}
                        />
                    </ListItem>
                </List>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    { users.map((user, index) => (
                        <MenuItem
                            key={index}
                            selected={index === this.state.selectedIndex}
                            onClick={event => this.handleClick(event, index)}>
                                {user.name} ({user.email})
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

UserMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMenu);