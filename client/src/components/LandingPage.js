import React, { Component } from 'react'
import MemberList from './Members/MemberList';
// import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';




export default class LandingPage extends Component {

    render() {

        return (
            <div >
                <MemberList />
            </div>

        );
    }
}