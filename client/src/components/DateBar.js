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


const styles = theme => ({
    // appBar: {
    //     // top: '0',
    //     // bottom: '',
    //     width: '375px',
    //     height: '100px',
    //     position: 'fixed',
    //     backgroundColor: 'white',
    //     boxShadow: 'none',
    //     borderBottom: `1px solid grey`,
    // },
    // title: {
    //     display: 'inline-block',
    //     align: 'center',
    //     marginLeft: 10
    // },
    // flex: {

    //       display: 'flex',
    //       justifyContent: 'space-evenly',
    //       alignItems: 'center',
    //       marginTop: '40px'

    //   },
    // grow: {
    //     flexGrow: 1,
    // },
    // grow: {
    //     flexGrow: 1,
    // },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        marginLeft: '140px',
        marginRight: 'auto',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    center: {
        align: 'center'
    },
    dateBarClass: {
        backgroundColor: '#5e7383',
        
    }
});


class DateBar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static"  className={classes.dateBarClass}>
                    <Toolbar className={classes.center}>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Date
                </Typography>
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
}
export default withStyles(styles)(DateBar)

