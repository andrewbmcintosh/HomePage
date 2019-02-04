import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import MemberList from './components/Members/MemberList';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#334856',
    },
    secondary: {
      main: '#f4511e',
    }
  },
  
  // typography: {
  //   // Use the system font instead of the default Roboto font.
  //   fontFamily: [
  //     '"Lato"',
  //     'sans-serif'
  //   ].join(',')
  // }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/members" component={MemberList} />
            {/* <Route exact path="/members/:memberId" component={SingleMember} /> */}
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
