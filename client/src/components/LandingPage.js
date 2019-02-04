import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import TopNav from './TopNav';
import BotNav from './BotNav';
import Backdrop from '@material-ui/core/Backdrop';
import DateBar from './DateBar';


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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <TopNav />
                <DateBar />
                <div>
                    <div>
                        <div>
                            <MemberList />
                        </div>

                    </div>
                </div>
                <BotNav />
            </div>

        );
    }
}
export default withStyles(styles)(LandingPage)