import React, { Component } from 'react';
import styled from 'styled-components';

import './app.css';
import MainNav from './MainNav'
import Game from './Game'
import Footer from './Footer'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

const StyledNav = styled(MainNav)`
  display: flex;
  flex: 1;
  max-height: fit-content;
  min-width: 100%;
  justify-self: flex-start;
  margin-bottom: 1rem;

  & > nav {
    min-width: 100% !important;
  }
`;

const StyledFooter = styled(Footer)`
  display: flex;
  flex: 1;
  max-height: 8vh;
  min-width: 100%;
  justify-self: flex-end;
  justify-content: flex-end;
  & > footer {
    min-width: 100% !important;
  }
`;

export default class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (
      <AppContainer className="app">
        <StyledNav />
        <Game />
        <StyledFooter />
      </AppContainer>
    );
  }
}