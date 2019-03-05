import React, { Component } from 'react';
import './app.css';
import Nav from './Nav'
import Game from './Game.js'
import Footer from './Footer'

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
      <div className="app">
        <Nav />
        <Game />
        <Footer />
      </div>
    );
  }
}