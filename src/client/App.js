import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Nav from './Nav'

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state;
    return (
      <div className="App">
        <Nav />
        {/* {username ? <h1>{`3 Blind Mice is using  ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" /> */}
        
      </div>
    );
  }
}
