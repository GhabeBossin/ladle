import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className} >
        <Navbar>
          <span> © Three Blind 🐁 Ltd site</span>
        </Navbar>
      </footer>
    );
  }
}

export default Footer