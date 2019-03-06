import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom";
import StyledAppContainer from '../styles/appStyles'
import StyledMainNav from '../styles/mainNavStyles'
import Game from './Game'
import AdminDash from './AdminDash'
import SignUp from './SignUp.jsx'
import Login from './Login'
import StyledFooter from '../styles/footerStyles'

class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (
      <div>
        <StyledAppContainer>
          <StyledMainNav />
            <div>
              <Switch>
                <Route exact path="/" component={Game} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/admin/dashboard" component={AdminDash} />
              </Switch>
            </div>
        </StyledAppContainer>
        <StyledFooter />
      </div>
    );
  }
}

export default App