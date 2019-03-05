import React from 'react';
import { Navbar } from 'reactstrap';
// import SearchBar from './SearchBar.js'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.className} >
        {/* < className='justify-content-end mb-0'> */}
          <span> © Three Blind 🐁 Ltd site</span>
        {/* </> */}
      </footer>
    );
  }
}