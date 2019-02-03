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
    appBar: {
        // top: '0',
        // bottom: '',
        width: '375px',
        height: '100px',
        position: 'fixed',
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: `1px solid grey`,
    },
    title: {
        display: 'inline-block',
        align: 'center',
        marginLeft: 10
    },
    flex: {
        
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: '40px'
        
      },
    grow: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },

});


class TopNav extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Grid container alignItems='baseline'>
                        <Grid item alignItems='baseline' className={classes.flex}>
 <IconButton className={classes.menuButton} color="#334856" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="#334856" className={classes.grow}>
                                <span className={classes.title}>HomePage</span>
                            </Typography>
                            <Button color="#334856">Login</Button>
                        </Grid>

                        </Grid>

                    </Toolbar>

                </AppBar>
            </div>

        );
    }
}
export default withStyles(styles)(TopNav)

