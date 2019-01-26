import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MemberList from './components/Members/MemberList';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/users" component={MemberList} />
            {/* <Route exact path="/users/:userId" component={SingleUser} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
