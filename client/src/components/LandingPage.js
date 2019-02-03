import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import AppBar from '@material-ui/core/AppBar';



export default class LandingPage extends Component {

    render() {

        return (
            <React.Fragment>
            <AppBar>
                <h1>HomePage</h1>
            </AppBar>
                <MemberList />
            </React.Fragment>

        );
    }
}