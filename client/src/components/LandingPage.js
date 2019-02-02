import React, { Component } from 'react'
import MemberList from './Members/MemberList';
// import { createMuiTheme } from '@material-ui/core/styles';

// import PropTypes from 'prop-types';
// import classNames from 'classnames';

// const theme = createMuiTheme({

// })

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    }

})


export default class LandingPage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <MemberList />
            </div>

        );
    }
}