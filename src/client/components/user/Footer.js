import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className} >
        <Navbar>
          <p className='icons'>Icons made by 
            <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </p>
          <span> © Three -1 Blind 🐁 Ltd site</span>
        </Navbar>
      </footer>
    );
  }
}

export default Footer