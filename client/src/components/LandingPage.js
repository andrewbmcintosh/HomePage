import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import TopNav from './TopNav';
import BotNav from './BotNav';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import DateBar from './DateBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 800
    },
    // fab: {
    //     color: 'black',
    // },
    // grid: {
    //     width: 1200,
    //     marginTop: 40,
    //     [theme.breakpoints.down('sm')]: {
    //       width: 'calc(100% - 20px)'
    //     }
    //   },
});


class LandingPage extends Component {
    state = {
        open: true,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <TopNav />
                <DateBar />
                <div>
                    <div>
                    <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use HomePage's Location Service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let HomePage determine your location. This means sending anonymous location data to
              HomePage when you click your user icon on the HomePage. Your location will only be saved once you click the orange
              ping button after selecting your icon. 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
                        <div>
                            <MemberList />
                        </div>

                    </div>
                </div>
                {/* <BotNav /> */}
            </div>

        );
    }
}
export default withStyles(styles)(LandingPage)