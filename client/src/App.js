import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MemberList from './components/Members/MemberList';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/members" component={MemberList} />
            {/* <Route exact path="/members/:memberId" component={SingleMember} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
