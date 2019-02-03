import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import TopNav from './TopNav';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['100'],
        overflow: 'hidden',
        // background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 200
    },
    fab: {
        color: 'black',
    },
    grid: {
        width: 1200,
        marginTop: 40,
        [theme.breakpoints.down('sm')]: {
          width: 'calc(100% - 20px)'
        }
      },
});


class LandingPage extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <TopNav />
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

                            <Grid container alignItems="center" justify="center">
                                <MemberList />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </React.Fragment>

        );
    }
}
export default withStyles(styles)(LandingPage)