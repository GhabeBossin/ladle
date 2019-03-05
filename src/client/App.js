import React, { Component } from 'react';
import styled from 'styled-components';
import StyledMainNav from './styles/mainNavStyles'
import Game from './Game'
import StyledFooter from './styles/footerStyles'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: calc(100vh - 2.5em);
`;

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
        <AppContainer>
          <StyledMainNav />
          <Game />
        </AppContainer>
        <StyledFooter />
      </div>
    );
  }
}

export default App