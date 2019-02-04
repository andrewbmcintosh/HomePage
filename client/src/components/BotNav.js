import React, { Component } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
      },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});


class BotNav extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" color="default" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(BotNav)
