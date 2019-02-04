import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'absolute',
    zIndex: 1,
    top: -65,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
},
paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
},
toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
},
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
                    <AppBar position="fixed" color="default" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <CircularProgress size="large" className={classes.progress} />
      <CircularProgress className={classes.progress} color="secondary" />
                    </Toolbar>
                </AppBar>

    </div>
  );
}


export default withStyles(styles)(CircularIndeterminate);