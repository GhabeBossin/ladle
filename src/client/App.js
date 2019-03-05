import React, { Component } from 'react';
import './app.css';
<<<<<<< 55e65f5f982efc853666578a97de5936c44c4fc7
import ReactImage from './react.png';
import Nav from './Nav';
import SignUp from './SignUp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      };
  }
  state = { username: null };

  componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
=======
// import ReactImage from './react.png';
import Nav from './Nav'
import Game from './Game'

export default class App extends Component {
  // state = { username: null };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
>>>>>>> Main game setup
  }

  render() {
    // const { username } = this.state;
    return (
      <div className="app">
        <Nav />
<<<<<<< 55e65f5f982efc853666578a97de5936c44c4fc7
        <SignUp />
=======
        <Game />
        {/* <MainContent /> */}
        {/* {username ? <h1>{`3 Blind Mice is using  ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" /> */}
        {/* <Footer /> Goes Here*/}

>>>>>>> Main game setup
      </div>
    );
  }
}
