import React, { Component } from 'react'
import MemberList from './Members/MemberList';
import { Box, Button, Collapsible, Grommet, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

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
    state = {
        showSidebar: false,
    }
    render() {
        const { showSidebar } = this.state;
        return (
            <Grommet theme={theme} full>
                <Box fill>
                    <AppBar>
                        <Heading level='3' margin='none'>MyApp</Heading>
                        <Button
                            icon={<Notification />}
                            onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                        />
                    </AppBar>
                    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                        <Box flex align='center' justify='center'>
                            app body
     </Box>
                        <Collapsible direction="horizontal" open={showSidebar}>


                            <Box
                                width='medium'
                                background='light-2'
                                elevation='small'
                                align='center'
                                justify='center'
                            >
                                sidebar
            </Box>
                        </Collapsible>
                    </Box>
                </Box>
            </Grommet>
        );
    }
}