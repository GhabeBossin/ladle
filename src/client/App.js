import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Nav from './Nav';
import SignUp from './SignUp';

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
        <SignUp />
      </div>
    );
  }
}
