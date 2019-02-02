import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import { Box } from 'grommet';

const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);

export default class LandingPage extends Component {
    render() {
        return (
            <div>
            <AppBar>
                Hello Grommet!
            </AppBar>
                <div>
                    <p>Hi from Landing Page!</p>
                    <MemberList />
                </div>
            </div>

        )
    }
}
