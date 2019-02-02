import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MemberList from './components/Members/MemberList';
import { Box, Grommet } from 'grommet';

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
class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/members" component={MemberList} />
            {/* <Route exact path="/members/:memberId" component={SingleMember} /> */}
          </Switch>
        </Router>
      </Grommet>
    );
  }
}

export default App;
