import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StyledAppContainer from '../styles/appStyles'
import StyledMainNav from '../styles/mainNavStyles'
import Game from './Game'
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
          <Game />
        </StyledAppContainer>
        <StyledFooter />
      </div>
    );
  }
}

export default App