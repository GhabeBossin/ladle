import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
// import SearchBar from './SearchBar.js'

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name   : 'Jo',
        isAdmin: true
      },
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen  : !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Navbar light expand="md" className="shadow-sm">
          <NavbarBrand href="/">ladle</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {/* STRETCH:
              <NavItem>
                <SearchBar />
              </NavItem>
              */}
              <NavItem>
                <NavLink href="#">Hello, {this.state.currentUser.name}</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/login">Logout</NavLink>
                  </DropdownItem>
                  { this.state.currentUser.isAdmin
                    ?
                    <div>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink href="/dashboard">Admin</NavLink>
                      </DropdownItem>
                    </div>
                    : null
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MainNav