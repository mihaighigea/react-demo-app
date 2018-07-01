import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import UserMenu from './usermenu/index';
import Demo1Table from './demo1/index';
import Demo2Table from './demo2/index';
import users from '../resources/users';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Index extends React.Component {
    state = {
        value: 0,
        user: users[0]
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    updateSelectedUser = (user) => {
        this.setState({ user });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Demo #1" />
                        <Tab label="Demo #2" />
                        <UserMenu updateSelectedUser={ this.updateSelectedUser }/>
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Demo1Table selectedUser={this.state.user}/></TabContainer>}
                {value === 1 && <TabContainer><Demo2Table selectedUser={this.state.user}/></TabContainer>}
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
