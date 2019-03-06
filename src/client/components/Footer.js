import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className} >
        <Navbar>
          <span> © Three -1 Blind 🐁 Ltd site</span>
        </Navbar>
      </footer>
    );
  }
}

export default Footer